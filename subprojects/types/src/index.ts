/**
 * @packageDocumentation
 *
 * <h3>Why does this library exist?</h3>
 *
 * `@monorepo/types` is a package for types 
 *  <a href="https://github.com/portfolio-y0711/2021_monorepo/" target="_blank">
 *  the repo on GitHub
 * </a>
 *
 * @remarks
 * All interfaces are prefixed with `I`
 *
 * @packageDocumentation
 */

interface IUser {
    id: number;
    userId: string;
    name: string;
}

export { IUser }