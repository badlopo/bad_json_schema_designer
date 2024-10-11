type IconProps = {
    className?: string
    onClick?: VoidFunction
}

const IconAdd = ({ className, onClick }: IconProps) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             width="1em" height="1em" className={ className } onClick={ onClick }>
            <path fill="currentColor"
                  d="M12 2a1 1 0 0 0-1 1v8H3a1 1 0 1 0 0 2h8v8a1 1 0 1 0 2 0v-8h8a1 1 0 1 0 0-2h-8V3a1 1 0 0 0-1-1Z"/>
        </svg>
    )
}

const IconArrowDown = ({ className, onClick }: IconProps) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             width="1em" height="1em" className={ className } onClick={ onClick }>
            <path
                d="M20.5598 9.65618L12.7546 18.6322C12.3559 19.0906 11.644 19.0906 11.2453 18.6322L3.4401 9.65618C2.8773 9.00895 3.33701 8 4.19471 8L19.8052 8C20.6629 8 21.1226 9.00895 20.5598 9.65618Z"
                fill="currentColor"/>
        </svg>

    )
}

const IconCheck = ({ className, onClick }: IconProps) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             width="1em" height="1em" className={ className } onClick={ onClick }>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M21.3516 4.2652C22.0336 4.73552 22.2052 5.66964 21.7348 6.35162L11.7348 20.8516C11.4765 21.2262 11.0622 21.4632 10.6084 21.4961C10.1546 21.529 9.71041 21.3541 9.40082 21.0207L2.90082 14.0207C2.33711 13.4136 2.37226 12.4645 2.97933 11.9008C3.5864 11.3371 4.53549 11.3723 5.0992 11.9793L10.3268 17.6091L19.2652 4.64842C19.7355 3.96644 20.6696 3.79487 21.3516 4.2652Z"
                  fill="currentColor"/>
        </svg>
    )
}

const IconCreateSub = ({ className, onClick }: IconProps) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             width="1em" height="1em" className={ className } onClick={ onClick }>
            <path fill="currentColor" fillRule="evenodd"
                  d="M7 10.889A4.502 4.502 0 0 0 6 2a4.5 4.5 0 0 0-1 8.889V16a3 3 0 0 0 3 3h3.564a2.358 2.358 0 0 1-.236-1.032c0-.345.074-.673.206-.968H8a1 1 0 0 1-1-1v-5.111ZM8.5 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  clipRule="evenodd"/>
            <path fill="currentColor"
                  d="M18.835 14.434a1 1 0 1 0-2 0v2.529h-2.529a1 1 0 1 0 0 2h2.528v2.527a1 1 0 1 0 2 0v-2.527h2.529a1 1 0 1 0 0-2h-2.529v-2.53Z"/>
        </svg>
    )
}

const IconDelete = ({ className, onClick }: IconProps) => {
    return (
        <svg viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
             width="1em" height="1em" className={ className } onClick={ onClick }>
            <path
                d="M1024 199.63c0 16.568-11.908 30-34 30H34c-22.091 0-34-13.432-34-30 0-16.568 11.909-30 34-30h956c22.092 0 34 13.432 34 30z"
                fill="currentColor"/>
            <path
                d="M405.12 446.769c-16.568 0-30 11.909-30 34v364c0 22.093 13.432 34 30 34s30-11.907 30-34v-364c0-22.091-13.432-34-30-34zM622.424 446.769c-16.568 0-30 11.909-30 34v364c0 22.093 13.432 34 30 34s30-11.907 30-34v-364c0-22.091-13.432-34-30-34z"
                fill="currentColor"/>
            <path
                d="M817.838 363.394c11.715 0 21.245 9.531 21.245 21.246V940.9c0 11.714-9.53 21.245-21.245 21.245h-608.13c-11.715 0-21.246-9.531-21.246-21.245V384.64c0-11.715 9.531-21.246 21.246-21.246h608.13m-17.835-61.855H227.542c-55.229 0-100 44.771-100 100V924c0 55.229 44.771 100 100 100h572.461c55.229 0 100-44.771 100-100V401.539c0-55.229-44.773-100-100-100zM414.674 183A99.886 99.886 0 0 1 412 160c0-55.14 44.86-100 100-100 55.141 0 100 44.86 100 100 0 7.913-0.929 15.613-2.674 23h61.021a161.234 161.234 0 0 0 1.652-23C672 71.635 600.365 0 512 0S352 71.635 352 160c0 7.811 0.571 15.488 1.652 23h61.022z"
                fill="currentColor"/>
        </svg>
    )
}

const IconEdit = ({ className, onClick }: IconProps) => {
    return (
        <svg viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
             width="1em" height="1em" className={ className } onClick={ onClick }>
            <path
                d="M906.833048 290.049195a36.52546 36.52546 0 0 0-36.537796 36.562466v584.59239a36.550131 36.550131 0 0 1-36.574802 36.537795H176.064805a36.574802 36.574802 0 0 1-36.537795-36.537795V180.435809a36.599473 36.599473 0 0 1 36.537795-36.537796h511.541471a36.537795 36.537795 0 1 0 0-73.07559H176.064805a109.786083 109.786083 0 0 0-109.613386 109.613386v730.768242a109.786083 109.786083 0 0 0 109.613386 109.613386h657.655645a109.786083 109.786083 0 0 0 109.613387-109.613386V326.611661a36.52546 36.52546 0 0 0-36.500789-36.562466z"
                fill="currentColor"/>
            <path
                d="M1008.045948 10.711458a36.500789 36.500789 0 0 0-51.661137 0L593.264257 373.832012a36.537795 36.537795 0 1 0 51.661137 51.661137L1008.045948 62.38493a36.500789 36.500789 0 0 0 0-51.673472zM468.367168 363.124785H249.140396a36.537795 36.537795 0 0 0 0 73.075591h219.226772a36.537795 36.537795 0 1 0 0-73.075591zM212.602601 618.901688a36.52546 36.52546 0 0 0 36.537795 36.537796h438.46588a36.537795 36.537795 0 1 0 0-73.075591H249.140396a36.52546 36.52546 0 0 0-36.537795 36.537795z"
                fill="currentColor"/>
        </svg>
    )
}

const IconRemove = ({ className, onClick }: IconProps) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             width="1em" height="1em"
             className={ className } onClick={ onClick }>
            <path fill="currentColor"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 2C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11ZM8 12a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z"/>
        </svg>
    )
}

export {
    IconAdd,
    IconArrowDown,
    IconCheck,
    IconCreateSub,
    IconDelete,
    IconEdit,
    IconRemove,
}
