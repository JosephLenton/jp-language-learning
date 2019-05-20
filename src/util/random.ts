
import * as randomJS from 'random-js'

export class Random {
  private engine : randomJS.Engine

  private guidInc = 0

  constructor(seed: number) {
    this.engine = randomJS.MersenneTwister19937.seed(seed)
  }

  setSeed(seed: number) {
    this.engine = randomJS.MersenneTwister19937.seed( seed )
  }

  anyInt():number {
    return this.int( 0, Number.MAX_SAFE_INTEGER )
  }

  int( min:number, max: number ): number {
    return randomJS.integer(  min, max )( this.engine )
  }

  intOf( max:number ): number {
    return randomJS.integer( 0, max )( this.engine )
  }

  intRange( max:number ):number {
    return randomJS.integer( -max/2, max/2 )( this.engine )
  }

  float( min:number, max: number ): number {
    return randomJS.real(  min, max )( this.engine )
  }

  floatOf( max: number ): number {
    return randomJS.real( 0, max )( this.engine )
  }

  bool50():boolean {
    return randomJS.bool()(this.engine)
  }

  bool( numerator: number, denumerator : number ):boolean {
    return randomJS.bool(numerator, denumerator)(this.engine)
  }

  boolOf( percentage : number ):boolean {
    return randomJS.bool(percentage)(this.engine)
  }

  guid():string {
    this.guidInc = (this.guidInc + 1) % Number.MAX_SAFE_INTEGER

    return `${Date.now()}_${randomSingleton.anyInt()}_${this.guidInc}`
  }
}

const randomSingleton = new Random(0)
export default Random

export function setSeed(seed: number) {
  randomSingleton.setSeed(seed)
}

export function anyInt():number {
  return randomSingleton.anyInt()
}

export function int( min:number, max: number ): number {
  return randomSingleton.int( min, max )
}

export function intOf( max:number ): number {
  return randomSingleton.intOf( max )
}

export function intRange( max:number ):number {
  return randomSingleton.intRange( max )
}

export function float( min:number, max: number ): number {
  return randomSingleton.float( min, max )
}

export function floatOf( max: number ): number {
  return randomSingleton.floatOf( max )
}

export function bool50():boolean {
  return randomSingleton.bool50()
}

export function bool( numerator: number, denumerator : number ):boolean {
  return randomSingleton.bool( numerator, denumerator )
}

export function boolOf( percentage : number ):boolean {
  return randomSingleton.boolOf( percentage)
}

export function guid() {
  return randomSingleton.guid()
}
