import { ReactNode } from 'react'

interface ShowProps {
  condition: boolean;
  children: ReactNode;
}

export function Show({ condition, children }: ShowProps) {
  if (condition) return <>{children}</>

  return <></>
}