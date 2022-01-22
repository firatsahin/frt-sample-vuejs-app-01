import AppSettings from './AppSettings'

const setTitle = (title) => {
    document.title = (title ? title + ' | ' : '') + AppSettings.siteTitle;
};

export { setTitle };