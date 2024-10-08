import { Configuration } from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')

    }
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')
    config.module?.rules?.push(buildCssLoader(true))
    return config
}