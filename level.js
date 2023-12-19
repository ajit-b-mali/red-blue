//  b ---> background
// -6 ---> Gate bottom
// -5 ---> Gate vertical
// -4 ---> Gate top
// -3 ---> horizontal door
// -2 ---> verticale door
// -1 ---> wall
//  0 ---> cell
//  1 ---> Trap
//  2 ---> Door Btn
//  3 ---> Gate Btn
const level = [
    //level 1
    {
        cellCountX: 6,
        cellCountY: 6,
        cellSize: 80,
        red: {
            x: 1,
            y: 1,
        },
        blue: {
            x: 4,
            y: 4,
        },
        green: {
            present: false,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 2
    {
        cellCountX: 6,
        cellCountY: 7,
        cellSize: 80,
        red: {
            x: 1,
            y: 5,
        },
        blue: {
            x: 4,
            y: 1,
        },
        green: {
            present: false,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1],
            [-1, 0, 0, 0, 0, -1],
            [-1, 0, -1, -1, -1, -1],
            [-1, 0, 0, 0, 0, -1],
            [-1, -1, -1, -1, 0, -1],
            [-1, 0, 0, 0, 0, -1],
            [-1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 3
    {
        cellCountX: 7,
        cellCountY: 7,
        cellSize: 80,
        red: {
            x: 1, 
            y: 5,
        },
        blue: {
            x: 5,
            y: 1,
        },
        green: {
            present: false,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  0,  0,  0, -1],
            [-1,  0, -1, -1, -1, -1, -1],
            [-1,  0,  0, -2,  0,  0, -1],
            [-1, -1, -1, -1, -1,  0, -1],
            [-1,  0,  0,  0,  0,  2, -1],
            [-1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: true,
            one: {
                x: 3,
                y: 3,
                type: -2,
            },
            two: {
                present: false,
            }
        },
        gate: {
            present: false,
        },
    },
    //level 4
    {
        cellCountX: 7,
        cellCountY: 5,
        cellSize: 80,
        red: {
            x: 1, 
            y: 3,
        },
        blue: {
            x: 5,
            y: 1,
        },
        green: {
            present: false,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  0,  0,  0, -1],
            [-1, -1, -1, -3, -1, -1, -1],
            [-1,  0,  2,  0,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: true,
            one: {
                x: 3,
                y: 2,
                type: -3,
            },
            two: {
                present: false,
            }
        },
        gate: {
            present: false,
        },
    },
    //level 5
    {
        cellCountX: 7,
        cellCountY: 5,
        cellSize: 80,
        red: {
            x: 1, 
            y: 1,
        },
        blue: {
            x: 5,
            y: 1,
        },
        green: {
            present: true,
            x: 3,
            y: 2,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0, -1,  0, -1],
            [-1,  0,  0,  0,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 6
    {
        cellCountX: 7,
        cellCountY: 5,
        cellSize: 80,
        red: {
            x: 1, 
            y: 1,
        },
        blue: {
            x: 5,
            y: 1,
        },
        green: {
            present: true,
            x: 3,
            y: 1,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  0, -1,  0, -1],
            [-1, -1,  0,  0, -1,  0, -1],
            [-1,  0,  0,  0,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 7
    {
        cellCountX: 7,
        cellCountY: 7,
        cellSize: 80,
        red: {
            x: 1, 
            y: 3,
        },
        blue: {
            x: 5,
            y: 3,
        },
        green: {
            present: true,
            x: 3,
            y: 3,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0, -1,  0,  0, -1],
            [-1,  0,  0, -1,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0, -1,  0,  0, -1],
            [-1,  0,  0, -1,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 8
    {
        cellCountX: 7,
        cellCountY: 7,
        cellSize: 80,
        red: {
            x: 1, 
            y: 1,
        },
        blue: {
            x: 5,
            y: 1,
        },
        green: {
            present: true,
            x: 3,
            y: 1,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  0, -1,  0, -1],
            [-1,  0,  0,  0, -1,  0, -1],
            [-1,  0,  0,  0,  0,  0, -1],
            [-1, -1,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 9
    {
        cellCountX: 7,
        cellCountY: 7,
        cellSize: 80,
        red: {
            x: 1, 
            y: 1,
        },
        blue: {
            x: 5,
            y: 1,
        },
        green: {
            present: true,
            x: 1,
            y: 4,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  0, -1,  0, -1],
            [-1,  0,  0,  0, -1,  0, -1],
            [-1, -1, -1,  0, -1,  0, -1],
            [-1,  0,  0,  0, -1,  0, -1],
            [-1,  0,  0,  0,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 10
    {
        cellCountX: 8,
        cellCountY: 8,
        cellSize: 70,
        red: {
            x: 1, 
            y: 1,
        },
        blue: {
            x: 5,
            y: 1,
        },
        green: {
            present: true,
            x: 1,
            y: 6,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, 'b'],
            [-1,  0,  0,  0, -1,  0, -1, 'b'],
            [-1,  0,  0,  0, -1,  0, -1, 'b'],
            [-1, -3, -1, -1, -1,  0, -1, 'b'],
            [-1,  0, -1,  2, -1,  0, -1, 'b'],
            [-1,  0,  0,  0, -1,  0, -1, -1 ],
            [-1,  0,  0,  0, -2,  0,  0, -1 ],
            [-1, -1, -1, -1, -1, -1, -1, -1 ],
        ],
        door: {
            present: true,
            one: {
                x: 4,
                y: 6,
                type: -2,
            },
            two: {
                present: true,
                x: 1,
                y: 3,
                type: -3,
            },
        },
        gate: {
            present: false,
        },
    },
    //level 11
    {
        cellCountX: 9,
        cellCountY: 5,
        cellSize: 80,
        red: {
            x: 5, 
            y: 3,
        },
        blue: {
            x: 2,
            y: 2,
        },
        green: {
            present: false,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  1,  0,  0,  0, -1, -1],
            [-1,  1,  0,  0,  0,  1,  0,  1, -1],
            [-1,  0,  0,  0,  1,  0,  0, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 12
    {
        cellCountX: 9,
        cellCountY: 5,
        cellSize: 80,
        red: {
            x: 6, 
            y: 3,
        },
        blue: {
            x: 1,
            y: 3,
        },
        green: {
            present: false,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0, -1,  0,  0,  0, -1, -1],
            [-1,  1,  0,  0,  0,  1,  0,  1, -1],
            [-1,  0,  0,  0,  1,  0,  0, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 13
    {
        cellCountX: 9,
        cellCountY: 9,
        cellSize: 60,
        red: {
            x: 6, 
            y: 6,
        },
        blue: {
            x: 2,
            y: 2,
        },
        green: {
            present: false,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  1,  0,  0,  0,  0,  1, -1],
            [-1,  1,  0,  0,  1,  0,  1,  0, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1,  1,  0,  0,  0,  1,  0,  0, -1],
            [-1,  0,  0,  1,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  1,  0,  0,  1,  0,  1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 14
    {
        cellCountX: 9,
        cellCountY: 9,
        cellSize: 60,
        red: {
            x: 6, 
            y: 6,
        },
        blue: {
            x: 2,
            y: 2,
        },
        green: {
            present: false,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  1,  0,  0, -1,  1,  0,  0, -1],
            [-1,  0,  0,  1, -1,  0, -1,  0, -1],
            [-1, -1,  0, -1, -1,  1,  0,  0, -1],
            [-1,  1,  0,  0,  0,  0,  0,  1, -1],
            [-1,  0,  0,  1, -1, -1,  0, -1, -1],
            [-1,  0, -1,  0, -1,  1,  0,  0, -1],
            [-1,  0,  0,  1, -1,  0,  0,  1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 15
    {
        cellCountX: 11,
        cellCountY: 9,
        cellSize: 60,
        red: {
            x: 7, 
            y: 3,
        },
        blue: {
            x: 2,
            y: 4,
        },
        green: {
            present: true,
            x: 8,
            y: 6,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  1,  0,  0,  1,  0,  0,  1, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  1,  0,  0,  1,  0,  0,  1,  0, -1],
            [-1,  0,  0,  1,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  1,  0,  0,  1, -1],
            [-1,  1,  0,  0,  1,  0,  0,  0,  0,  0, -1],
            [-1,  0,  1,  0,  0,  0,  0,  1,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 16
    {
        cellCountX: 11,
        cellCountY: 9,
        cellSize: 60,
        red: {
            x: 8, 
            y: 6,
        },
        blue: {
            x: 4,
            y: 6,
        },
        green: {
            present: false,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  1,  0, -1,  0,  1,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  0,  1,  0,  0, -1],
            [-1,  0,  1,  1,  0, -1,  0,  0,  1,  0, -1],
            [-1,  1,  0,  0,  0, -1,  1,  0,  0,  0, -1],
            [-1,  0,  0,  1,  0, -1,  0,  0,  1,  0, -1],
            [-1,  1,  0,  0,  0, -1,  0,  0,  0,  1, -1],
            [-1,  0,  0,  0,  1, -1,  0,  0,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 17
    {
        cellCountX: 11,
        cellCountY: 5,
        cellSize: 60,
        red: {
            x: 6, 
            y: 2,
        },
        blue: {
            x: 2,
            y: 2,
        },
        green: {
            present: false,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  0, -4,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0, -5,  0,  0,  0,  3,  0, -1],
            [-1,  0,  0,  0, -6,  0,  0,  0,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: true,
            one: {
                cord: [[1, 2, 3],[4, 4, 4]],
                btn: {
                    x: 8,
                    y: 2,
                },
                history: [[],[]],
                type: "ver",
            },
            two: {
                present: false,
            }
        },
    },
    //level 18
    {
        cellCountX: 11,
        cellCountY: 11,
        cellSize: 60,
        red: {
            x: 2,
            y: 9,
        },
        blue: {
            x: 2, 
            y: 2,
        },
        green: {
            present: true,
            x: 8,
            y: 8,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  1, -1,  0,  0, -1,  0, -1,  0,  0, -1],
            [-1,  0,  0,  0,  0,  1,  0,  2,  1,  0, -1],
            [-1,  0,  0,  1,  0, -1,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  1,  0,  0,  0,  0, -1],
            [-1, -1, -3, -1,  1, -1,  1, -1,  0, -1, -1],
            [-1,  0,  0,  0,  0,  1,  0,  0,  0,  0, -1],
            [-1,  0,  0,  1,  0, -1,  0,  1,  0,  0, -1],
            [-1,  0,  1,  0,  0,  1,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0, -1,  0,  0,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: true,
            one: {
                x: 2,
                y: 5,
                type: -3,
            },
            two: {
                present: false,
            },
        },
        gate: {
            present: false,
        },
    },
    //level 19
    {
        cellCountX: 11,
        cellCountY: 9,
        cellSize: 60,
        red: {
            x: 8,
            y: 2,
        },
        blue: {
            x: 2, 
            y: 6,
        },
        green: {
            present: false,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  1,  0,  0, -4,  0,  1,  0,  0, -1],
            [-1,  1,  0,  0,  1, -5,  0,  0,  0,  1, -1],
            [-1,  0,  0,  1,  0, -5,  1,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0, -5,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  1, -5,  1,  0,  1,  0, -1],
            [-1,  1,  0,  0,  0, -5,  0,  1,  3,  0, -1],
            [-1,  0,  0,  0,  1, -6,  0,  0,  1,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: true,
            one: {
                cord: [[1, 2, 3, 4, 5, 6, 7],[5, 5, 5, 5, 5, 5, 5]],
                btn: {
                    x: 8,
                    y: 6,
                },
                history: [[4],[5]],
                type: "ver",
            },
            two: {
                present: false,
            }
        },
    },
    //level 20
    {
        cellCountX: 11,
        cellCountY: 9,
        cellSize: 60,
        red: {
            x: 2,
            y: 3,
        },
        blue: {
            x: 8, 
            y: 6,
        },
        green: {
            present: false,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  1,  0, -1],
            [-1,  0,  1,  0,  0,  0,  1,  0,  0,  0, -1],
            [-1,  1,  0,  0,  1,  0,  1,  0,  0,  1, -1],
            [-1,  0,  0,  1,  0,  0,  1,  0,  0, -1, -1],
            [-1,  0,  1,  0,  0,  0,  1,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  1,  1,  0,  0,  1, -1],
            [-1,  0,  0,  0,  1,  0,  0,  0,  0,  1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 21
    {
        cellCountX: 11,
        cellCountY: 11,
        cellSize: 60,
        red: {
            x: 8,
            y: 8,
        },
        blue: {
            x: 2, 
            y: 2,
        },
        green: {
            present: true,
            x: 2,
            y: 8,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  1,  0,  0,  0, -2,  0,  1, -1,  1, -1],
            [-1,  0,  0,  0,  0, -1,  0,  0,  2, -1, -1],
            [-1,  0,  0,  0,  0,  1,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0, -1,  0,  1,  0,  0, -1],
            [-1,  0,  1,  0,  0,  1,  0,  0,  0,  1, -1],
            [-1, -1,  0,  0,  0, -1,  0,  0,  1,  0, -1],
            [-1,  0,  0,  0,  0,  1, -1,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0, -1,  0,  0,  0, -1, -1],
            [-1,  0,  0,  0,  0,  1,  0,  0,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: true,
            one: {
                present: true,
                x: 5,
                y: 1,
                type: -2,
            },
            two: {
                present: false,
            }
        },
        gate: {
            present: false,
        },
    },
    //level 22
    {
        cellCountX: 11,
        cellCountY: 11,
        cellSize: 60,
        red: {
            x: 2, 
            y: 2,
        },
        blue: {
            x: 8,
            y: 7,
        },
        green: {
            present: true,
            x: 7,
            y: 8,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  0,  1, -1],
            [-1,  1,  0,  0,  0,  0,  1,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  1,  0, -1],
            [-1,  0,  0,  0,  0,  0,  1,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0, -1,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  1,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1,  1,  0,  0,  0,  0,  0,  1,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 23
    {
        cellCountX: 11,
        cellCountY: 11,
        cellSize: 60,
        red: {
            x: 8, 
            y: 2,
        },
        blue: {
            x: 8,
            y: 8,
        },
        green: {
            present: false,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  1,  0,  1, -4,  0,  0,  1,  0, -1],
            [-1,  0,  4,  0,  1, -5,  1,  0,  0,  0, -1],
            [-1,  0,  0,  0,  1, -5,  0,  0,  0, -1, -1],
            [-1,  0,  1,  0,  0, -6,  0,  0,  0,  0, -1],
            [-1, -7, -8, -8, -8, -8, -8, -8, -8, -9, -1],
            [-1,  1,  0,  1,  1,  1,  1,  0,  0,  0, -1],
            [-1,  0,  0,  0,  1,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  1,  0,  0,  0, -1],
            [-1,  0,  0,  0,  1,  1,  1,  0,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: true,
            one: {
                cord: [[1, 2, 3, 4],[5, 5, 5, 5]],
                btn: {
                    x: 2,
                    y: 8,
                },
                history: [[],[]],
                type: "ver",
            },
            two: {
                present: true,
                cord: [[5, 5, 5, 5, 5, 5, 5, 5, 5],[1, 2, 3, 4, 5, 6, 7, 8, 9]],
                btn: {
                    x: 2,
                    y: 2,
                },
                history: [[5, 5, 5, 5, 5],[2, 3, 4, 7, 8]],
                type: "hor",
            },
        },
    },
    //level 24
    {
        cellCountX: 12,
        cellCountY: 12,
        cellSize: 55,
        red: {
            x: 9, 
            y: 3,
        },
        blue: {
            x: 3,
            y: 9,
        },
        green: {
            present: true,
            x: 9,
            y: 9,
        },
        mat: [
            ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', -1, -1, -1],
            ['b',  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1, -1,  1, -1],
            ['b',  -1,   0,   0,   0,   0,  -4,   0,   0,  0,  0, -1],
            ['b',  -1,   0,   0,   1,   0,  -5,   0,   1,  0,  0, -1],
            ['b',  -1,   0,   0,   0,   1,  -5,   0,   0,  0,  0, -1],
            ['b',  -1,   0,   1,   0,   0,  -6,   0,   0,  0,  0, -1],
            [ -1,  -1,  -7,  -8,  -8,  -9,  -1,  -1,  -1, -1, -1, -1],
            [ -1,   1,   0,   0,   0,   0,  -1,  -1,   3,  0,  0, -1],
            [ -1,  -1,   0,   0,   0,   0,  -1,   4,   0,  1,  0, -1],
            ['b',  -1,   0,   0,   1,   0,  -1,   0,  -1,  0,  0, -1],
            ['b',  -1,   0,   0,   0,   0,  -1,   1,   0,  0,  0, -1],
            ['b',  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: true,
            one: {
                cord: [[2, 3, 4, 5],[6, 6, 6, 6]],
                btn: {
                    x: 8,
                    y: 7,
                },
                history: [[3],[6]],
                type: "ver",
            },
            two: {
                present: true,
                cord: [[6, 6, 6, 6],[2, 3, 4, 5]],
                btn: {
                    x: 7,
                    y: 8,
                },
                history: [[],[]],
                type: "hor",
            },
        },
    },
    //level 25
    {
        cellCountX: 11,
        cellCountY: 11,
        cellSize: 55,
        red: {
            x: 8, 
            y: 2,
        },
        blue: {
            x: 2,
            y: 2,
        },
        green: {
            present: true,
            x: 5,
            y: 9,
        },
        mat: [
           
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  1,  0,  0, -1,  0,  0,  1,  0, -1],
            [-1,  1,  0,  0,  0, -1,  0,  0,  0,  1, -1],
            [-1,  0,  0,  0,  0, -1,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0, -1,  0,  1,  0,  0, -1],
            [-1,  0,  1,  0,  0, -1,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0, -1,  0,  0,  0, -1, -1],
            [-1,  0,  0,  1,  0, -1,  1,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0, -1,  0,  0,  0,  0, -1],
            [-1,  0,  0,  1,  0,  0,  0,  1,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 26
    {
        cellCountX: 11,
        cellCountY: 11,
        cellSize: 55,
        red: {
            x: 3, 
            y: 8,
        },
        blue: {
            x: 7,
            y: 8,
        },
        green: {
            present: true,
            x: 5,
            y: 8,
        },
        mat: [
           
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0, -1,  0,  0,  1,  0,  1,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  1,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  1,  0,  1,  0,  0,  0, -1],
            [-1,  1,  0,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  1,  0,  0,  0,  0, -1],
            [-1,  1,  0,  0,  0,  0,  0,  0,  1,  0, -1],
            [-1,  0,  1,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 27
    {
        cellCountX: 11,
        cellCountY: 11,
        cellSize: 55,
        red: {
            x: 2, 
            y: 8,
        },
        blue: {
            x: 4,
            y: 6,
        },
        green: {
            present: true,
            x: 3,
            y: 7,
        },
        mat: [
           
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  0,  1, -1],
            [-1,  0,  0,  0,  1,  0,  0,  0, -1,  0, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  1,  0,  0,  1,  0,  0,  0,  1, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  1,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  0,  1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 28
    {
        cellCountX: 11,
        cellCountY: 11,
        cellSize: 55,
        red: {
            x: 8, 
            y: 2,
        },
        blue: {
            x: 2,
            y: 2,
        },
        green: {
            present: true,
            x: 3,
            y: 8,
        },
        mat: [
           
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  0,  0, -4,  1,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0, -5,  0,  0,  0,  0, -1],
            [-1,  0,  1,  0,  0, -5,  0,  0,  1,  0, -1],
            [-1,  0,  0,  0,  0, -5, -1,  0,  0,  0, -1],
            [-1,  0,  0,  1,  0, -5,  0,  1,  0,  0, -1],
            [-1,  1,  0,  0,  0, -5,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0, -5,  0,  0,  0,  1, -1],
            [-1,  0,  0,  0,  1, -5,  0,  3,  0,  0, -1],
            [-1,  0,  0,  0,  0, -6,  0,  0,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: true,
            one: {
                cord: [[1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 5, 5, 5, 5, 5, 5, 5, 5]],
                btn: {
                    x: 7,
                    y: 8,
                },
                history: [[3],[6]],
                type: "ver",
            },
            two: {
                present: false,
            },
        },
    },
    //level 29
    {
        cellCountX: 11,
        cellCountY: 11,
        cellSize: 55,
        red: {
            x: 3, 
            y: 6,
        },
        blue: {
            x: 5,
            y: 5,
        },
        green: {
            present: true,
            x: 7,
            y: 4,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  0,  0,  0,  1,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  1,  0,  0,  1,  1, -1],
            [-1,  0,  1,  0,  0,  0,  0, -1,  0,  0, -1],
            [-1,  0,  0,  0,  1,  0,  0,  0,  0,  1, -1],
            [-1,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  1,  0,  0, -1,  0,  0,  1,  0, -1],
            [-1,  1,  0,  0,  1,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  1,  0,  0,  0, -1],
            [-1,  0,  1,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
    //level 30
    {
        cellCountX: 11,
        cellCountY: 11,
        cellSize: 55,
        red: {
            x: 2, 
            y: 8,
        },
        blue: {
            x: 8,
            y: 2,
        },
        green: {
            present: true,
            x: 7,
            y: 3,
        },
        mat: [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1,  0,  0,  0,  0,  1,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  0,  1, -1],
            [-1,  0,  1,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  1,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0, -1,  0,  1,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1,  0,  0,  0,  0,  0,  0,  1,  0,  0, -1],
            [-1,  0,  1,  0,  0,  0,  0,  0,  0,  0, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        ],
        door: {
            present: false,
        },
        gate: {
            present: false,
        },
    },
]

export default level;