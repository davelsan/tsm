import mat3 from './mat3';
import vec3 from './vec3';
import vec4 from './vec4';
export default class mat4 {
    constructor(values?: number[]);
    private values;
    static readonly identity: mat4;
    at(index: number): number;
    init(values: number[]): mat4;
    reset(): void;
    copy(dest?: mat4): mat4;
    all(): number[];
    row(index: number): number[];
    col(index: number): number[];
    equals(matrix: mat4, threshold?: number): boolean;
    determinant(): number;
    setIdentity(): mat4;
    transpose(): mat4;
    inverse(): mat4;
    multiply(matrix: mat4): mat4;
    multiplyVec3(vector: vec3): vec3;
    multiplyVec4(vector: vec4, dest?: vec4): vec4;
    toMat3(): mat3;
    toInverseMat3(): mat3;
    translate(vector: vec3): mat4;
    scale(vector: vec3): mat4;
    rotate(angle: number, axis: vec3): mat4;
    static frustum(left: number, right: number, bottom: number, top: number, near: number, far: number): mat4;
    static perspective(fov: number, aspect: number, near: number, far: number): mat4;
    static orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number): mat4;
    static lookAt(position: vec3, target: vec3, up?: vec3): mat4;
    static product(m1: mat4, m2: mat4, result: mat4): mat4;
}
