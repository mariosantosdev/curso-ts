/*
    Namespace em multiplos arquivos
*/
namespace Matematic {
    export function subtrair(nums: number[]): number {
        return nums.reduce((n, t) => t - n)
    }
}