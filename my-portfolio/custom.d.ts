// declare module "*.svg" {
//     const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//     export default content;
//   }

  declare module '*.svg' {
    import React = require('react')
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
    const src: string
    export default src
}