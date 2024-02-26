import { Link, NavLink, useNavigate } from 'react-router-dom';
import * as React from 'react';
import { navSchema } from './schema/nav.schema';
import useTranslationNavBar from '../../app/i18n/useTranslationNavBar';
import { Menubar, MenubarProps } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';
import { useMemo } from 'react';
// import { Menubar } from '@mfe-nx/uikit';

export const NavBar = () => {
  const { t } = useTranslationNavBar();
  const navigate = useNavigate();

  const items: MenuItem[] = useMemo(
    () => [
      {
        label: t('NavItems.home'),
        icon: 'pi pi-home',
        command: () => {
          navigate('/');
        },
      },
      {
        label: t('NavItems.shop'),
        icon: 'pi pi-shopping-cart',
        command: () => {
          navigate('/shop');
        },
      },
      {
        label: t('NavItems.card'),
        icon: 'pi pi-id-card',
        command: () => {
          navigate('/card');
        },
      },
      {
        label: t('NavItems.about'),
        icon: 'pi pi-info-circle',
        command: () => {
          navigate('/about');
        },
      },
    ],
    [t]
  );

  return (
    <div>
      <div className="card">
        <Menubar model={items} />
      </div>
      <div className="card flex justify-content-center">
        <Button label="Check" icon="pi pi-check" />
      </div>
    </div>
  );
};
/*
{
  devServer: {
    host: 'localhost',
    port: 4200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
      htmlAcceptHeaders: [Array]
    },
    onListening: [Function: onListening],
    open: false,
    static: false,
    compress: false,
    devMiddleware: { publicPath: '/', stats: false },
    client: { webSocketURL: undefined, overlay: [Object] },
    liveReload: false,
    hot: true
  },
  context: '/home/siarhkul/WebstormProjects/mfe-nx/apps/host',
  target: 'web',
  node: { __dirname: true, __filename: true },
  mode: 'development',
  cache: undefined,
  devtool: 'source-map',
  output: {
    libraryTarget: undefined,
    path: '/home/siarhkul/WebstormProjects/mfe-nx/dist/apps/host',
    filename: '[name].js',
    chunkFilename: '[name].js',
    hashFunction: 'xxhash64',
    pathinfo: false,
    scriptType: 'module',
    crossOriginLoading: false,
    uniqueName: 'host',
    publicPath: 'auto'
  },
  watch: false,
  watchOptions: { poll: undefined },
  profile: undefined,
  performance: { hints: false },
  experiments: { cacheUnaffected: true, outputModule: true },
  ignoreWarnings: [ [Function (anonymous)] ],
  optimization: { runtimeChunk: false },
  stats: {
    hash: true,
    timings: false,
    cached: false,
    cachedAssets: false,
    modules: false,
    warnings: true,
    errors: true,
    colors: true,
    chunks: true,
    assets: false,
    chunkOrigins: false,
    chunkModules: false,
    children: false,
    reasons: false,
    version: false,
    errorDetails: false,
    moduleTrace: false,
    usedExports: false
  },
  entry: {
    main: [ '/home/siarhkul/WebstormProjects/mfe-nx/apps/host/src/main.ts' ],
    styles: [
      '/home/siarhkul/WebstormProjects/mfe-nx/apps/host/src/styles.scss'
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.mjs', '.js', '.jsx' ],
    alias: {},
    mainFields: [ 'browser', 'module', 'main' ]
  },
  externals: [],
  module: {
    unsafeCache: true,
    rules: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  },
  plugins: [
    NxTsconfigPathsWebpackPlugin { options: [Object] },
    ForkTsCheckerWebpackPlugin { options: [Object] },
    CopyPlugin { patterns: [Array], options: {} },
    WriteIndexHtmlPlugin { options: [Object] },
    DefinePlugin { definitions: [Object] },
    MiniCssExtractPlugin {
      _sortedModulesCache: [WeakMap],
      options: [Object],
      runtimeOptions: [Object]
    },
    ReactRefreshPlugin { options: [Object] },
    ModuleFederationPlugin { _options: [Object] },
    NormalModuleReplacementPlugin {
      resourceRegExp: /./,
      newResource: [Function (anonymous)]
    }
  ]
}

* */
