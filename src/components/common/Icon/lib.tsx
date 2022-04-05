import * as React from 'react'

function getSize(height: number, width: number, ratio: number = 1) {
    return {
        height: height * ratio,
        width: width * ratio,
    }
}

export const defaultProps = {
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
}

/* eslint-disable */
const library: Record<string, React.ElementType> = {
    everCoinIcon: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 600 600" {...getSize(20, 20, ratio)}><path d="M300 600C465.685 600 600 465.685 600 300C600 134.315 465.685 0 300 0C134.315 0 0 134.315 0 300C0 465.685 134.315 600 300 600Z" fill="url(#paint0_linear_126_62)"/><path fillRule="evenodd" clipRule="evenodd" d="M322.598 505L445 383.512V155H216.488L95 277.5H322.5L322.598 505Z" fill="white"/><defs><linearGradient id="paint0_linear_126_62" x1="600" y1="0.000226805" x2="54.5601" y2="541.13" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6922"/><stop offset="1" stopColor="#6347F5"/></linearGradient></defs></svg>,
    bnbWalletIcon: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 32 32" {...getSize(20, 20, ratio)}><path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white"/><path d="M18.2561 23.9316V26.6209L15.9658 28L13.7439 26.6209V23.9316L15.9658 25.3107L18.2561 23.9316ZM6 14.6203L8.22186 16.0006V20.6206L12.0607 22.9662V25.6555L6 21.9997V14.6203ZM25.9327 14.6203V21.9997L19.8046 25.6555V22.9662L23.6424 20.6206V16.0006L25.9327 14.6203ZM19.8046 10.9657L22.0938 12.3414V15.0341L18.2561 17.3797V22.0687L16.0331 23.4489L13.8113 22.0687V17.3797L9.83884 15.0341V12.3414L12.128 10.9623L15.9658 13.3102L19.8046 10.9657ZM9.83884 16.9715L12.0607 18.3473V21.0366L9.83884 19.6574V16.9715ZM22.0938 16.9715V19.6608L19.872 21.0399V18.3473L22.0938 16.9715ZM8.22186 8.63006L10.5121 10.0058L8.22186 11.3794V14.0687L6 12.6896V10.0058L8.22186 8.63006ZM23.7097 8.63006L26 10.0058V12.6896L23.7097 14.0687V11.3794L21.4879 10.0058L23.7097 8.63006ZM15.9658 8.63006L18.2561 10.0058L15.9658 11.3794L13.7439 10.0058L15.9658 8.63006ZM15.9658 4L22.0938 7.65466L19.872 9.03489L16.0331 6.68928L12.1237 9.03489L9.90943 7.65466L15.9658 4Z" fill="#F3BA2F"/></svg>,
    ethWalletIcon: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 32 32" {...getSize(20, 20, ratio)}><path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white"/><g clipPath="url(#clip0_1235_13413)"><path d="M15.997 4L15.8359 4.54693V20.4161L15.997 20.5767L23.3631 16.2225L15.997 4Z" fill="#343434"/><path d="M15.9952 4L8.62891 16.2225L15.9952 20.5767V12.8743V4Z" fill="#8C8C8C"/><path d="M15.997 21.9713L15.9062 22.082V27.7348L15.997 27.9997L23.3677 17.6194L15.997 21.9713Z" fill="#3C3C3B"/><path d="M15.9952 27.9997V21.9713L8.62891 17.6194L15.9952 27.9997Z" fill="#8C8C8C"/><path d="M15.9941 20.5767L23.3603 16.2225L15.9941 12.8742V20.5767Z" fill="#141414"/><path d="M8.62891 16.2225L15.9952 20.5767V12.8742L8.62891 16.2225Z" fill="#393939"/></g><defs><clipPath id="clip0_1235_13413"><rect width="24" height="24" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>,
    ftmWalletIcon: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 32 32" {...getSize(20, 20, ratio)}><path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#13B5EC"/><path fillRule="evenodd" clipRule="evenodd" d="M17.2 12.9L20.8 10.8V15L17.2 12.9ZM20.8 21.9L16 24.7L11.2 21.9V17L16 19.8L20.8 17V21.9ZM11.2 10.8L14.8 12.9L11.2 15V10.8ZM16.6 13.9L20.2 16L16.6 18.1V13.9ZM15.4 18.1L11.8 16L15.4 13.9V18.1ZM20.2 9.8L16 12.2L11.8 9.8L16 7.3L20.2 9.8ZM10 9.4V22.5L16 25.9L22 22.5V9.4L16 6L10 9.4Z" fill="white"/></svg>,
    maticWalletIcon: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 32 32" {...getSize(20, 20, ratio)}><path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white"/><path d="M21.1436 13.1958C20.7781 12.9941 20.3081 12.9941 19.8903 13.1958L16.9661 14.8605L14.9817 15.9199L12.1097 17.5846C11.7441 17.7864 11.2742 17.7864 10.8564 17.5846L8.61097 16.273C8.24543 16.0712 7.98433 15.6677 7.98433 15.2136V12.6914C7.98433 12.2878 8.19321 11.8843 8.61097 11.632L10.8564 10.3709C11.2219 10.1691 11.6919 10.1691 12.1097 10.3709L14.3551 11.6825C14.7206 11.8843 14.9817 12.2878 14.9817 12.7418V14.4065L16.9661 13.2967V11.5816C16.9661 11.178 16.7572 10.7745 16.3394 10.5223L12.1619 8.15134C11.7963 7.94955 11.3264 7.94955 10.9086 8.15134L6.62663 10.5727C6.20888 10.7745 6 11.178 6 11.5816V16.3234C6 16.727 6.20888 17.1306 6.62663 17.3828L10.8564 19.7537C11.2219 19.9555 11.6919 19.9555 12.1097 19.7537L14.9817 18.1395L16.9661 17.0297L19.8381 15.4154C20.2037 15.2137 20.6736 15.2137 21.0914 15.4154L23.3368 16.6766C23.7023 16.8783 23.9634 17.2819 23.9634 17.7359V20.2582C23.9634 20.6617 23.7546 21.0653 23.3368 21.3175L21.1436 22.5786C20.7781 22.7804 20.3081 22.7804 19.8903 22.5786L17.6449 21.3175C17.2794 21.1157 17.0183 20.7122 17.0183 20.2582V18.6439L15.0339 19.7537V21.4184C15.0339 21.822 15.2428 22.2255 15.6606 22.4777L19.8903 24.8487C20.2559 25.0504 20.7258 25.0504 21.1436 24.8487L25.3734 22.4777C25.7389 22.276 26 21.8724 26 21.4184V16.6261C26 16.2226 25.7911 15.819 25.3734 15.5668L21.1436 13.1958Z" fill="#8247E5"/></svg>,
    tonWalletIcon: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 14 14" {...getSize(20, 20, ratio)}><path d="M0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M4.26013 3.82371C4.35008 3.71128 4.48625 3.64583 4.63023 3.64583H9.36981C9.51379 3.64583 9.64997 3.71128 9.73991 3.82371L11.6357 6.1935C11.7866 6.38208 11.7716 6.65395 11.6008 6.82472L7.33516 11.0903C7.15007 11.2754 6.84998 11.2754 6.66488 11.0903L2.39926 6.82472C2.22849 6.65395 2.21343 6.38208 2.3643 6.1935L4.26013 3.82371ZM4.49224 5.05098L4.8781 6.01562H3.72053L4.49224 5.05098ZM3.87864 6.96354L5.91549 9.00039L5.23654 6.96354H3.87864ZM6.23573 6.96354L7.00002 9.25641L7.76432 6.96354H6.23573ZM8.76351 6.96354L8.08456 9.00039L10.1214 6.96354H8.76351ZM10.2795 6.01562H9.12195L9.50781 5.05098L10.2795 6.01562ZM8.66976 4.59374H7.83712L8.33671 5.42638L8.66976 4.59374ZM7.5848 6.01562L7.00002 5.041L6.41525 6.01562H7.5848ZM5.66334 5.42638L6.16292 4.59374H5.33028L5.66334 5.42638Z" fill="#33A9FB"/><path d="M5.57812 6.48958H2.73438L7 10.7552L5.57812 6.48958Z" fill="#51C0FB"/><path d="M4.63021 4.1198L2.73438 6.48959H5.57812L4.63021 4.1198Z" fill="#79D0FE"/><path d="M8.42188 6.48958H11.2656L7 10.7552L8.42188 6.48958Z" fill="#33A9FB"/><path d="M8.42188 6.48958H5.57812L7 10.7552L8.42188 6.48958Z" fill="#78D9FF"/><path d="M7 4.1198L5.57812 6.48959H8.42188L7 4.1198Z" fill="#51AEF4"/><path d="M9.36979 4.1198L8.42188 6.48959H11.2656L9.36979 4.1198Z" fill="#79C6FE"/><path d="M9.36979 4.1198H7L8.42187 6.48959L9.36979 4.1198Z" fill="#6BBCF9"/><path d="M6.99998 4.1198H4.63019L5.5781 6.48959L6.99998 4.1198Z" fill="#C4E9FF"/></svg>,

    arrowDown: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path d="M10 13L5 8H15L10 13Z" fill="white" fillOpacity="0.48"/></svg>,
    arrowLeft: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path d="M7 10L12 5L12 15L7 10Z" fill="currentColor" fillOpacity="0.48"/></svg>,
    arrowRight: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path d="M13 10L8 15L8 5L13 10Z" fill="currentColor" fillOpacity="0.48"/></svg>,
    externalLink: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 512 512" {...getSize(20, 20, ratio)}><path d="M511.5,0.9v255.5h-34.4V63.2L159.4,381l-24.2-24.2L457.6,34.4H256V0h255.5V0.9z M374.9,477.6H34.8V137.5 h223.9v-34.4H0.5V512h408.9V249h-34.4V477.6z" fill="currentColor" strokeWidth={1.6}/></svg>,
    close: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 40 40" {...getSize(40, 40, ratio)}><path d="M14 14L20 20M20 20L14 26M20 20L26 14M20 20L26 26" stroke="currentColor" strokeWidth={2}/></svg>,
    info: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17ZM10.75 9V14H9.25V9H10.75ZM10.75 7V5.5H9.25V7H10.75Z"/></svg>,
    loader: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 22 22" {...getSize(22, 22, ratio)}><path d="M11 22C17.0959 22 22 17.0959 22 11C22 7.12134 20.0146 3.72514 17 1.76773L16 3.45543C18.4345 5.04268 20 7.78975 20 11C20 16.0799 16.0799 20 11 20C5.92011 20 2 16.0799 2 11C2 5.92011 5.92011 2 11 2V0C4.90413 0 0 4.90413 0 11C0 17.0959 4.90413 22 11 22Z" fill="currentColor"/></svg>,
    logout: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 32 32" {...getSize(32, 32, ratio)}><path fillRule="evenodd" clipRule="evenodd" d="M18.4753 18.2903H19.295H20.1146V21.5162V23.9355H15.1966L15.1967 27L13.0492 26.2799L8.11633 24.662C7.4459 24.433 7 24.2782 7 24.2782V7H8.63938C8.66196 7 8.68378 7.00459 8.70558 7.00919C8.72248 7.01275 8.73936 7.0163 8.75659 7.01772C8.76929 7.01605 8.78125 7.01267 8.79315 7.00931C8.80968 7.00464 8.8261 7 8.84424 7H17.6556H20.1146V11.8387H19.295H18.4753L18.4754 8.61267L17.6556 8.61281H13.8376H11.918L15.1966 9.41936V22.3226H18.4753V21.5162V18.2903ZM23.153 11.2686L27 15.0644C27 15.0644 26.7522 15.3194 26.4318 15.6346L23.153 18.8605L21.7541 20.2257L21.7539 15.8709H17.6556V15.0645V14.2581H21.7539L21.7541 9.90301L23.153 11.2686Z"/></svg>,
    plus: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 36 36" {...getSize(36, 36, ratio)}><path d="M18 27V9" stroke="currentColor" strokeWidth={2}/><path d="M9 18L27 18" stroke="currentColor" strokeWidth={2}/></svg>,
    remove: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 14 14" {...getSize(14, 14, ratio)}><path d="M1 1L7 7M7 7L1 13M7 7L13 1M7 7L13 13" stroke="currentColor" strokeWidth={2}/></svg>,
    star: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 24 24" {...getSize(24, 24, ratio)}><path d="M14.6258 8.82306L14.7857 9.24051L15.2317 9.27097L22.2779 9.7522L16.8465 14.5363L16.5284 14.8165L16.6294 15.2283L18.3978 22.4392L12.3794 18.4874L11.9952 18.2351L11.611 18.4874L5.59272 22.4392L7.36114 15.2283L7.46204 14.8168L7.14433 14.5366L1.72029 9.7522L8.75876 9.27096L9.20473 9.24047L9.36467 8.82306L11.9952 1.95785L14.6258 8.82306Z" stroke="currentColor" strokeWidth={1.4}/></svg>,
    copy: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path d="M16 13V4H8M4 17H12.6V7H4V17Z" stroke="currentColor" strokeWidth="1.4"/></svg>,
    twitter: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path d="M19 4.77577C18.3306 5.07692 17.6174 5.27654 16.8737 5.37346C17.6388 4.905 18.2226 4.16885 18.4971 3.28154C17.7839 3.71769 16.9964 4.02577 16.1571 4.19769C15.4799 3.45808 14.5146 3 13.4616 3C11.4186 3 9.77387 4.70077 9.77387 6.78577C9.77387 7.08577 9.79862 7.37423 9.85938 7.64885C6.7915 7.49538 4.07687 5.98731 2.25325 3.69C1.93487 4.25654 1.74813 4.905 1.74813 5.60308C1.74813 6.91385 2.40625 8.07577 3.38725 8.74846C2.79437 8.73692 2.21275 8.56038 1.72 8.28231C1.72 8.29385 1.72 8.30885 1.72 8.32385C1.72 10.1631 2.99912 11.6908 4.6765 12.0427C4.37612 12.1269 4.04875 12.1673 3.709 12.1673C3.47275 12.1673 3.23425 12.1535 3.01038 12.1027C3.4885 13.6015 4.84525 14.7035 6.4585 14.7392C5.203 15.7465 3.60888 16.3535 1.88313 16.3535C1.5805 16.3535 1.29025 16.3396 1 16.3015C2.63462 17.3827 4.57188 18 6.661 18C13.4515 18 17.164 12.2308 17.164 7.23C17.164 7.06269 17.1584 6.90115 17.1505 6.74077C17.8829 6.20769 18.4982 5.54192 19 4.77577Z" fill="currentColor"/></svg>,
    github: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path d="M10 1C5.0275 1 1 5.13211 1 10.2284C1 14.3065 3.5785 17.7648 7.15375 18.9841C7.60375 19.0709 7.76875 18.7853 7.76875 18.5403C7.76875 18.3212 7.76125 17.7405 7.7575 16.9712C5.254 17.5277 4.726 15.7332 4.726 15.7332C4.3165 14.6681 3.72475 14.3832 3.72475 14.3832C2.9095 13.8111 3.78775 13.8229 3.78775 13.8229C4.6915 13.887 5.16625 14.7737 5.16625 14.7737C5.96875 16.1847 7.273 15.777 7.7875 15.5414C7.8685 14.9443 8.10025 14.5381 8.3575 14.3073C6.35875 14.0764 4.258 13.2829 4.258 9.74709C4.258 8.73988 4.60675 7.91659 5.18425 7.27095C5.083 7.03774 4.77925 6.0994 5.263 4.82846C5.263 4.82846 6.01675 4.58116 7.738 5.77462C8.458 5.56958 9.223 5.46785 9.988 5.46315C10.753 5.46785 11.518 5.56958 12.238 5.77462C13.948 4.58116 14.7017 4.82846 14.7017 4.82846C15.1855 6.0994 14.8818 7.03774 14.7917 7.27095C15.3655 7.91659 15.7142 8.73988 15.7142 9.74709C15.7142 13.2923 13.6105 14.0725 11.608 14.2995C11.923 14.5765 12.2155 15.1423 12.2155 16.0071C12.2155 17.242 12.2043 18.2344 12.2043 18.5341C12.2043 18.7759 12.3617 19.0647 12.823 18.9723C16.4237 17.7609 19 14.3002 19 10.2284C19 5.13211 14.9703 1 10 1Z" fill="currentColor"/></svg>,
    medium: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path fillRule="evenodd" clipRule="evenodd" d="M11.3953 9.69767C11.3953 12.8444 8.84441 15.3953 5.69767 15.3953C2.55094 15.3953 0 12.8444 0 9.69767C0 6.55094 2.55094 4 5.69767 4C8.84441 4 11.3953 6.55094 11.3953 9.69767ZM17.4419 9.69767C17.4419 12.716 16.1924 15.1628 14.6512 15.1628C13.1099 15.1628 11.8605 12.716 11.8605 9.69767C11.8605 6.67937 13.1099 4.23256 14.6512 4.23256C16.1924 4.23256 17.4419 6.67937 17.4419 9.69767ZM18.9535 14.4651C19.5315 14.4651 20 12.2786 20 9.5814C20 6.88419 19.5315 4.69767 18.9535 4.69767C18.3755 4.69767 17.907 6.88419 17.907 9.5814C17.907 12.2786 18.3755 14.4651 18.9535 14.4651Z" fill="currentColor"/></svg>,
    telegram: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path d="M3.09992 9.02697C7.39487 7.05126 10.2589 5.74875 11.6919 5.11944C15.7834 3.32264 16.6335 3.01052 17.1877 3.0001C17.3095 2.99794 17.582 3.02983 17.7586 3.18106C17.9076 3.30876 17.9486 3.48125 17.9683 3.60232C17.9879 3.72339 18.0123 3.99919 17.9929 4.21469C17.7712 6.67437 16.8118 12.6434 16.3237 15.3983C16.1172 16.564 15.7105 16.9548 15.3168 16.9931C14.4613 17.0762 13.8116 16.3961 12.9829 15.8226C11.6862 14.9251 10.9537 14.3664 9.69503 13.4907C8.24042 12.4786 9.18338 11.9224 10.0124 11.0133C10.2293 10.7754 13.999 7.15516 14.0719 6.82675C14.0811 6.78568 14.0895 6.63258 14.0034 6.55173C13.9172 6.47089 13.7901 6.49853 13.6983 6.52052C13.5683 6.55169 11.4968 7.9973 7.48389 10.8573C6.89591 11.2836 6.36333 11.4913 5.88616 11.4805C5.36012 11.4685 4.34822 11.1664 3.59598 10.9083C2.67333 10.5916 1.94002 10.4242 2.00388 9.88638C2.03714 9.60627 2.40248 9.3198 3.09992 9.02697Z" fill="currentColor"/></svg>,
    right: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 16 17" {...getSize(16, 17, ratio)}><path d="M5 2.75L11 8.75L5 14.75" stroke="currentColor" strokeWidth={1.6} /></svg>,
    check: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 10 8" {...getSize(10, 8, ratio)}><path d="M1.5 4L4 6.5L8.5 1" stroke="currentColor" strokeWidth="1.8"/></svg>,
    vCols: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path fillRule="evenodd" clipRule="evenodd" d="M1 1L5 1L5 19H1L1 1ZM8 1L12 1L12 19H8V1ZM19 1L15 1L15 19H19V1Z" fill="currentColor" /></svg>,
    hCols: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path fillRule="evenodd" clipRule="evenodd" d="M1 1L19 1V5L1 5L1 1ZM1 8L19 8V12L1 12L1 8ZM19 15L1 15L1 19H19V15Z" fill="currentColor" /></svg>,
    up: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path d="M4 13L10 7L16 13" stroke="currentColor" strokeWidth={1.6} /></svg>,
    down: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path d="M16 7L10 13L4 7" stroke="currentColor" strokeWidth={1.6} /></svg>,
    link: ({ ratio, ...props }) => <svg  {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path fillRule="evenodd" clipRule="evenodd" d="M9.46447 7.32233L8.39341 6.25126L10.5355 4.10913C12.0144 2.63029 14.412 2.63029 15.8909 4.10913C17.3697 5.58796 17.3697 7.98562 15.8909 9.46446L13.7487 11.6066L12.6777 10.5355L14.8198 8.39339C15.7071 7.50609 15.7071 6.06749 14.8198 5.18019C13.9325 4.29289 12.4939 4.29289 11.6066 5.18019L9.46447 7.32233Z" fill="currentColor" fillOpacity="0.48"/><path fillRule="evenodd" clipRule="evenodd" d="M7.85787 13.2128L6.7868 12.1417L12.1421 6.78637L13.2132 7.85743L7.85787 13.2128Z" fill="currentColor" fillOpacity="0.48"/><path fillRule="evenodd" clipRule="evenodd" d="M10.5355 12.6773L11.6066 13.7484L9.46446 15.8905C7.98563 17.3693 5.58796 17.3693 4.10913 15.8905C2.63029 14.4117 2.63029 12.014 4.10913 10.5352L6.25126 8.39303L7.32233 9.4641L5.18019 11.6062C4.29289 12.4935 4.29289 13.9321 5.18019 14.8194C6.06749 15.7067 7.50609 15.7067 8.39339 14.8194L10.5355 12.6773Z" fill="currentColor" fillOpacity="0.48"/></svg>,
    edit: ({ ratio, ...props }) => <svg  {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path fillRule="evenodd" clipRule="evenodd" d="M17 15.6V10.7001H15.6V15.6H4.40004V4.40011H9.30001V3.00012H4.40004C3.62684 3.00012 3.00004 3.62692 3.00004 4.40011V15.6C3.00004 16.3732 3.62684 17 4.40004 17H15.6C16.3732 17 17 16.3732 17 15.6ZM15.0246 3.50652C14.7038 3.18312 14.2644 3.00012 13.8061 3.00012C13.3483 3.00012 12.9095 3.1827 12.5868 3.50736L6.72857 9.36548C6.20509 9.82672 5.86193 10.5131 5.8023 11.2512L5.80003 13.5017V14.2017H8.69423C9.48824 14.1472 10.1813 13.8007 10.6703 13.2367L16.4953 7.41418C16.8184 7.09101 17 6.65269 17 6.19566C17 5.73862 16.8184 5.30031 16.4953 4.97714L15.0246 3.50652ZM8.6448 12.8035C9.01875 12.777 9.36685 12.6029 9.64636 12.2832L13.8897 8.03992L11.9617 6.11181L7.68729 10.3848C7.40368 10.6356 7.22824 10.9866 7.20002 11.3076V12.8021L8.6448 12.8035ZM12.9518 5.12203L14.8796 7.04997L15.5053 6.42425C15.5659 6.36363 15.6 6.28141 15.6 6.19568C15.6 6.10994 15.5659 6.02772 15.5053 5.9671L14.0328 4.49453C13.9728 4.43411 13.8912 4.40013 13.8061 4.40013C13.721 4.40013 13.6394 4.43411 13.5795 4.49453L12.9518 5.12203Z" fill="currentColor"/></svg>,
    add: ({ ratio, ...props }) => <svg  {...defaultProps} {...props} viewBox="0 0 21 20" {...getSize(21, 20, ratio)}><path fillRule="evenodd" clipRule="evenodd" d="M10.5 19.1673C5.43743 19.1673 1.33337 15.0633 1.33337 10.0007C1.33337 4.93804 5.43743 0.833984 10.5 0.833984C15.5626 0.833984 19.6667 4.93804 19.6667 10.0007C19.6667 15.0633 15.5626 19.1673 10.5 19.1673ZM10.5 17.5007C14.6422 17.5007 18 14.1428 18 10.0007C18 5.85851 14.6422 2.50065 10.5 2.50065C6.3579 2.50065 3.00004 5.85851 3.00004 10.0007C3.00004 14.1428 6.3579 17.5007 10.5 17.5007ZM14.6667 9.16732H11.3334V5.83398H9.66671V9.16732H6.33337V10.834H9.66671V14.1673H11.3334V10.834H14.6667V9.16732Z" fill="currentColor"/></svg>,
    warning: ({ ratio, ...props }) => <svg  {...defaultProps} {...props} viewBox="0 0 64 64" {...getSize(64, 64, ratio)}><path fillRule="evenodd" clipRule="evenodd" d="M59.8442 42.5425L41.1633 10.6076C39.2878 7.35638 35.7923 5.33842 32.0119 5.33399C28.2312 5.32957 24.7344 7.3392 22.8357 10.6078L4.14784 42.5543C2.21004 45.8126 2.1662 49.8954 4.04318 53.2252C5.92171 56.5577 9.43913 58.6316 13.2651 58.6627L50.6994 58.6629C54.5652 58.6253 58.0759 56.5578 59.9541 53.2282C61.8302 49.9026 61.7882 45.8288 59.8442 42.5425ZM8.74159 45.2638L27.4433 13.2937C28.3904 11.6634 30.1274 10.6651 32.0057 10.6673C33.8838 10.6695 35.6202 11.6719 36.5516 13.2866L55.2472 45.2467C56.2272 46.9033 56.2482 48.9427 55.3089 50.6078C54.3683 52.2752 52.6099 53.3108 50.6734 53.3297L13.2868 53.3295C11.3918 53.314 9.62997 52.2752 8.6892 50.6062C7.74946 48.9391 7.77141 46.8952 8.74159 45.2638ZM32.0009 47.9957C33.4742 47.9957 34.6685 46.8018 34.6685 45.3291C34.6685 43.8563 33.4742 42.6624 32.0009 42.6624C30.5277 42.6624 29.3334 43.8563 29.3334 45.3291C29.3334 46.8018 30.5277 47.9957 32.0009 47.9957ZM34.6764 21.3291H29.3413V39.9957H34.6764V21.3291Z" fill="currentColor"/></svg>,
    success: ({ ratio, ...props }) => <svg  {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path fillRule="evenodd" clipRule="evenodd" d="M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19Z" fill="#4AB44A" fillOpacity="0.32"/><path d="M5.5 9.55002L9.1 13.15L14.95 6.40002" stroke="#4AB44A" strokeWidth="1.8"/></svg>,
    addAssetToWallet: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path fillRule="evenodd" clipRule="evenodd" d="M11.4645 11.4645C9.51184 13.4171 9.51184 16.5829 11.4645 18.5355C13.4171 20.4882 16.5829 20.4882 18.5355 18.5355C20.4882 16.5829 20.4882 13.4171 18.5355 11.4645C16.5829 9.51184 13.4171 9.51184 11.4645 11.4645ZM11.4645 16L14.2 15.8L14 18.5355H16L15.8 15.8L18.5355 16V14L15.8 14.2L16 11.5H14L14.2 14.2L11.4645 14V16Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M1 4.66667C1 3.19391 2.20883 2 3.7 2H14.5C15.4941 2 16.3 2.79594 16.3 3.77778V3.82335H3.90769C3.29593 3.82335 2.8 4.31316 2.8 4.91737C2.8 5.52158 3.29593 6.01138 3.90769 6.01138H19V9.25399C16.2703 7.34904 12.486 7.61446 10.0503 10.0503C7.90012 12.2004 7.44115 15.4013 8.67333 18H3.7C2.20883 18 1 16.8061 1 15.3333V4.66667Z" fill="currentColor"/></svg>,

}

export default library
