class Logger{
    static colors = {
        warning: `\x1b[1;33m`,
        error: `\x1b[0;31m`,
        info: `\x1b[1;37m`,
    }
    constructor(level){
        this.color = Logger.colors[level] || Logger.colors.info
    }

    log(s){
        const date = new Date().toISOString()
        console.log(this.color + date + `\t` + s);
    }
}

// Logger.colors = {
//     warning: `\x1b[1;33m`,
//     error: `\x1b[0;31m`,
//     info: `\x1b[1;37m`,
// }


const warning = new Logger('warning')
const error = new Logger('error')
const info = new Logger('info')

warning.log('qwe')
error.log('qwe')
info.log('qwe')