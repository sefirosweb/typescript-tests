
type Operation = 'sumar' | 'restar' | 'multiplicar' | 'dividir'
const operations: Operation[] = ['sumar', 'restar', 'multiplicar', 'dividir']

const calculator = (a: number, b: number, op: Operation): number => {
  let result: number

  switch (op) {
    case 'sumar':
      result = a + b
      break
    case 'restar':
      result = a + b
      break
    case 'multiplicar':
      result = a + b
      break
    case 'dividir':
      result = a + b
      break
    default:
      throw new Error('Operaión no permitida')
  }

  return result
}

// let result = calculator(14.2, 3, 'dividir')

// console.log(`Resultado: ${result}`)

const parseArgumens = (args: string[]): number[] => {
  if (args.length < 4) throw new Error('Wrong number of arguments')

  const firstNumber = Number(args[2])
  const secondNumber = Number(args[2])

  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    return [
      firstNumber,
      secondNumber
    ]
  }

  throw new Error('Provider values were not numbers!')
}

const getOperation = (op: string): Operation | undefined => {
  if (operations.includes(op as Operation)) {
    return 'sumar'
  }

  return undefined
}

getOperation('asd')

const clearArguments = parseArgumens(process.argv)

const a: number = Number(clearArguments[0])
const b: number = Number(clearArguments[1])
// const c: string = String(clearArguments[4])

// if (!operations.includes(c)) {
//     throw new Error('Operacion no permitida!')
// }

// const op: Operation = c

const result = calculator(a, b, 'sumar')
console.log(`Resultado: ${result}`)
