/**
 * @packageDocumentation
 *
 *  🐙 모노리포 프로젝트에서 사용될 타입 정보를 포함하는 패키지입니다.  
 *
 * @remarks
 * 모든 인터페이스는 접두어 `I`로 시작합니다. 
 *
 * @packageDocumentation
 */

interface IUser {
    id: number;
    userId: string;
    name: string;
}

export { IUser }