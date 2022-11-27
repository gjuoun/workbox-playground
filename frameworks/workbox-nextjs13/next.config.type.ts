import type {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_EXPORT,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
  PHASE_TEST,
} from "next/constants";

import type { NextConfig } from "next";
export type { NextConfig } from "next";

type Phase =
  | typeof PHASE_DEVELOPMENT_SERVER
  | typeof PHASE_EXPORT
  | typeof PHASE_PRODUCTION_BUILD
  | typeof PHASE_PRODUCTION_SERVER
  | typeof PHASE_TEST;

export type NextConfigFunction = (
  phase: Phase,
  context: { defaultConfig: NextConfig }
) => NextConfig;
