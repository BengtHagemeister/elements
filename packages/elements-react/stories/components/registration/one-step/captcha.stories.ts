// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { config } from "../../../utils"
import { RegistrationFlowFromJSON } from "@ory/client-fetch"
import type { Meta, StoryObj } from "@storybook/react"
import { Registration } from "../../../../src/theme/default"

const meta = {
  title: "Ory Elements/Registration/Unified/Captcha",
  component: Registration,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Registration>

export default meta

type Story = StoryObj<typeof meta>

export const ShowForm: Story = {
  args: {
    flow: RegistrationFlowFromJSON(
      require("$snapshots/registration/one-step/captcha/initial-form.json"),
    ),
    config,
  },
}

export const ValidationCaptchaUnsolved: Story = {
  args: {
    flow: RegistrationFlowFromJSON(
      require("$snapshots/registration/one-step/captcha/wrong-captcha.json"),
    ),
    config,
  },
}
