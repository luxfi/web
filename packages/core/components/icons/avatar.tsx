import React from 'react'
import { type LucideProps } from 'lucide-react'

const Avatar: React.FC<LucideProps> = (props: LucideProps) => (
    <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M8.66112 10.3544C6.14668 10.3544 4.32664 6.91073 4.32664 4.59206C4.32664 2.12213 6.27238 0.115723 8.66112 0.115723C11.0499 0.115723 12.9956 2.12514 12.9956 4.59206C12.9956 6.91398 11.1756 10.3544 8.66112 10.3544ZM8.66112 1.1542C6.82539 1.1542 5.33242 2.69703 5.33242 4.59185C5.33242 6.65402 6.94715 9.31553 8.66112 9.31553C10.3761 9.31553 11.9898 6.65387 11.9898 4.5925C11.9898 2.69668 10.4969 1.15398 8.66112 1.15398V1.1542Z" fill="white" />
        <path d="M6.79776 11.3345H10.5242C13.7802 11.3345 16.4302 14.0712 16.4302 17.4338C16.4302 19.0831 15.1297 20.423 13.5356 20.423H3.78923C2.19216 20.423 0.894689 19.0831 0.894689 17.4338C0.893706 14.0712 3.54156 11.3345 6.79776 11.3345ZM3.78819 19.3844H13.5337C14.5749 19.3844 15.4225 18.509 15.4225 17.4338C15.4225 14.6453 13.2253 12.3731 10.5223 12.3731H6.79862C4.0956 12.3731 1.89839 14.6423 1.89839 17.4338C1.89937 18.509 2.74701 19.3844 3.78816 19.3844H3.78819Z" fill="white" />
    </svg>
)

export default Avatar