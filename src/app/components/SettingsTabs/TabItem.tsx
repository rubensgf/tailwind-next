'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { BlockList } from 'net'

export interface TabItemProps{

    value: string
    title: string
    isSelected? : boolean
}

export function TabItem({value, title, isSelected = false }:TabItemProps ){
    return(

        <Tabs.Trigger  
        value={value}
        className='px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700'
        >
            <span>{title}</span>

            {isSelected  && (
                <div className='absolute left-0 right-0 h-0.5'></div>
            )}
  
          </Tabs.Trigger>
    )
}