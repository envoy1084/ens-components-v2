# syntax=docker/dockerfile:1.7

ARG RUST_VERSION=1.96.0

FROM rust:${RUST_VERSION}-bookworm AS builder

WORKDIR /workspace
COPY Cargo.toml Cargo.lock rust-toolchain.toml ./
COPY apps/server/Cargo.toml apps/server/Cargo.toml
COPY apps/server/deployments apps/server/deployments
COPY apps/server/src apps/server/src
RUN cargo build --package server --release --locked \
    && install --mode=0755 target/release/server /usr/local/bin/server

FROM debian:bookworm-slim AS runtime

RUN apt-get update \
    && apt-get install --yes --no-install-recommends ca-certificates \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd --system server \
    && useradd --system --gid server --no-create-home server

COPY --from=builder /usr/local/bin/server /usr/local/bin/server

USER server
EXPOSE 8080
STOPSIGNAL SIGTERM
ENTRYPOINT ["/usr/local/bin/server"]
