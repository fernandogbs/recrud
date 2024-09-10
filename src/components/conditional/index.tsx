import React from 'react'

interface ConditionProps extends BaseProps {
  condition: boolean
}

interface BaseProps {
  children: React.ReactNode
}

const Conditional = ({ children }: { children: React.ReactNode[] }): JSX.Element => {
  if (!children || !children.length || children.length < 2) { throw new Error('Conditional component must have at least 2 child components') }
  return children.find(child => {
    if (!React.isValidElement(child)) { throw new Error('Invalid child element') }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ([If, ElseIf, Else].indexOf(child.type as any) === -1) { throw new Error('The child element must be an "If", "ElseIf" or "Else" component') }

    if (child.type === If && child.props.condition) return If
    if (child.type === ElseIf && child.props.condition) return ElseIf
    if (child.type === Else) return Else
    return null
  }) as unknown as JSX.Element
}

const If = ({ children }: ConditionProps): JSX.Element => {
  return children as unknown as JSX.Element
}

const ElseIf = ({ children }: ConditionProps): JSX.Element => {
  return children as unknown as JSX.Element
}

const Else = ({ children }: BaseProps): JSX.Element => {
  return children as unknown as JSX.Element
}

export { Conditional, If, Else, ElseIf }