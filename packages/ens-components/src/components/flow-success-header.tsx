import type { ReactNode } from "react";

import { Typography } from "@thenamespace/uikit";

import { REGISTER_ENS_SUCCESS_URL } from "#/asset-urls";

export interface FlowSuccessHeaderProps {
  description?: ReactNode;
  graphic?: ReactNode;
  name: string;
  title: ReactNode;
}

export function FlowSuccessHeader({ description, graphic, name, title }: FlowSuccessHeaderProps) {
  return (
    <>
      {graphic ?? <img alt="" className="h-auto w-full max-w-48" src={REGISTER_ENS_SUCCESS_URL} />}
      <Typography.Paragraph className="mt-5" color="muted" size="sm">
        {title}
      </Typography.Paragraph>
      <Typography.Heading
        className="mt-1 max-w-full text-center text-2xl font-semibold break-all"
        level={3}
      >
        {name}
      </Typography.Heading>
      {description === undefined ? null : (
        <Typography.Paragraph className="mt-2" color="muted" size="sm">
          {description}
        </Typography.Paragraph>
      )}
    </>
  );
}
