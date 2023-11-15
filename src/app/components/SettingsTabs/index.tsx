'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './tabItem'

export function SettingsTabs(){
    return(
        <Tabs.Root>
        <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
            <TabItem value='tab1' title="My details" isSelected/>
            <TabItem value='tab1' title="Profile" />
            <TabItem value='tab1' title="Password" />
            <TabItem value='tab1' title="Team" />
            <TabItem value='tab1' title="Plan" />
            <TabItem value='tab1' title="Billing" />
            <TabItem value='tab1' title="Email" />
            <TabItem value='tab1' title="Notification" />
            <TabItem value='tab1' title="Integrations" />
            <TabItem value='tab1' title="API" />
        </Tabs.List>
  
      </Tabs.Root>
    )
}