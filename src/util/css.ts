
const ONE_REM_IN_PIXELS = 1 / 16

export function px( size : number ):string {
  return `${size*ONE_REM_IN_PIXELS}rem`
}
