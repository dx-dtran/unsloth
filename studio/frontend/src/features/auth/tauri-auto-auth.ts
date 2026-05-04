// SPDX-License-Identifier: AGPL-3.0-only
// Copyright 2026-present the Unsloth AI Inc. team. All rights reserved. See /studio/LICENSE.AGPL-3.0

export function getTauriAuthFailure(): string | null {
  return null;
}

export function clearTauriAuthFailure(): void {
  // no-op: auth removed
}

export function tauriAutoAuth(): Promise<boolean> {
  return Promise.resolve(true);
}
