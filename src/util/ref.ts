
export interface Ref<E extends Element> {
  ( el:E ): void

  access( f:(el:E) => void ):void
}

export interface RefHTMLElement<E extends HTMLElement> extends Ref<E> {
  focus():void
}

export function ref<E extends Element, R = E extends HTMLElement ? RefHTMLElement<E> : Ref<E> >():R {
  let innerElement : null|E = null

  const ref = ( el : E ) => {
    innerElement = el
  }

  const access = ( f:(el:E) => void ) => {
    if ( innerElement ) {
      f(innerElement)
    }
  }

  ref.access = access

  ref.focus = () => {
    if ( innerElement instanceof HTMLElement ) {
      innerElement.focus()
    }
  }

  return ref as any as R
}
