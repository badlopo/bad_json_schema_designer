type IconProps = {
    className?: string
    onClick?: () => void
}

const IconArrowDown = ({ className, onClick }: IconProps) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             width="1em" height="1em"
             className={ className } onClick={ onClick }>
            <path
                d="M20.5598 9.65618L12.7546 18.6322C12.3559 19.0906 11.644 19.0906 11.2453 18.6322L3.4401 9.65618C2.8773 9.00895 3.33701 8 4.19471 8L19.8052 8C20.6629 8 21.1226 9.00895 20.5598 9.65618Z"
                fill="currentColor"/>
        </svg>

    )
}

const IconCreateSub = ({ className, onClick }: IconProps) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             width="1em" height="1em"
             className={ className } onClick={ onClick }>
            <path fill="currentColor" fillRule="evenodd"
                  d="M7 10.889A4.502 4.502 0 0 0 6 2a4.5 4.5 0 0 0-1 8.889V16a3 3 0 0 0 3 3h3.564a2.358 2.358 0 0 1-.236-1.032c0-.345.074-.673.206-.968H8a1 1 0 0 1-1-1v-5.111ZM8.5 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  clipRule="evenodd"/>
            <path fill="currentColor"
                  d="M18.835 14.434a1 1 0 1 0-2 0v2.529h-2.529a1 1 0 1 0 0 2h2.528v2.527a1 1 0 1 0 2 0v-2.527h2.529a1 1 0 1 0 0-2h-2.529v-2.53Z"/>
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
    IconArrowDown,
    IconCreateSub,
    IconRemove,
}
