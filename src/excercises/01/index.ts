import { open } from "node:fs/promises"
import test from "node:test"
import assert from "node:assert/strict"

let filehandle
try {
  filehandle = await open("./01/input.txt", "r")
  const input = await filehandle.readFile({ encoding: "utf-8" })

  let resultArray: number[] = []
  let separateLines = input.split("\n")

  let tempSum: number = 0
  separateLines.forEach((item) => {
    if (item !== "") {
      tempSum += parseInt(item, 10)
    } else {
      resultArray.push(tempSum)
      tempSum = 0
    }
  })

  const result1 = Math.max(...resultArray)
  console.log(result1)

  const sortedResultArray = resultArray.sort((a, b) => b - a)
  const result2 = sortedResultArray[0]! + sortedResultArray[1]! + sortedResultArray[2]!
  console.log(result2)

  test("synchronous passing test", (t) => {
    // This test passes because it does not throw an exception.
    assert.strictEqual(1, 1)
  })
} finally {
  await filehandle?.close()
}
