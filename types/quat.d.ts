import mat3 from './mat3';
import mat4 from './mat4';
import vec3 from './vec3';
export default class quat {
    x: number;
    y: number;
    z: number;
    w: number;
    xy: [number, number];
    xyz: [number, number, number];
    xyzw: [number, number, number, number];
    constructor(values?: [number, number, number, number]);
    private values;
    static readonly identity: quat;
    at(index: number): number;
    reset(): void;
    copy(dest?: quat): quat;
    roll(): number;
    pitch(): number;
    yaw(): number;
    equals(vector: quat, threshold?: number): boolean;
    setIdentity(): quat;
    calculateW(): quat;
    inverse(): quat;
    conjugate(): quat;
    length(): number;
    normalize(dest?: quat): quat;
    add(other: quat): quat;
    multiply(other: quat): quat;
    multiplyVec3(vector: vec3, dest?: vec3): vec3;
    toMat3(dest?: mat3): mat3;
    toMat4(dest?: mat4): mat4;
    static dot(q1: quat, q2: quat): number;
    static sum(q1: quat, q2: quat, dest?: quat): quat;
    static product(q1: quat, q2: quat, dest?: quat): quat;
    static cross(q1: quat, q2: quat, dest?: quat): quat;
    static shortMix(q1: quat, q2: quat, time: number, dest?: quat): quat;
    static mix(q1: quat, q2: quat, time: number, dest?: quat): quat;
    static fromAxisAngle(axis: vec3, angle: number, dest?: quat): quat;
}
