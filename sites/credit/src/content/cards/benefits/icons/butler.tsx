import React from 'react'
import { type LucideProps } from 'lucide-react'

const Butler: React.FC<LucideProps> = (props: LucideProps) => (
  <svg viewBox="0 0 26 29" fill="currentColor" {...props}>
    <path d="M1.05314 5.38142C1.1188 5.4754 1.21908 5.53944 1.33195 5.55932C1.44491 5.57928 1.56102 5.55347 1.65491 5.48764C1.74881 5.42189 1.81258 5.32143 1.83236 5.20846C1.85206 5.09559 1.82607 4.97939 1.76005 4.88566C1.49589 4.50916 1.59187 4.29584 1.83362 3.84955C2.08788 3.38096 2.47175 2.6727 1.73649 1.80207V1.80216C1.66274 1.7142 1.55697 1.65933 1.44265 1.64953C1.32824 1.63973 1.21474 1.67579 1.12705 1.7499C1.03936 1.82392 0.984764 1.92987 0.975322 2.04418C0.965878 2.15859 1.00239 2.272 1.07668 2.35941C1.43168 2.77952 1.31232 2.99961 1.07461 3.43807C0.834284 3.88138 0.471025 4.55151 1.05312 5.38139L1.05314 5.38142Z" fill="currentColor"/>
    <path d="M2.96234 7.29045C3.05102 7.41646 3.20013 7.48562 3.35357 7.47204C3.5071 7.45837 3.64165 7.36402 3.70677 7.22434C3.77188 7.08475 3.75758 6.92097 3.66935 6.7947C3.40503 6.41804 3.50089 6.20488 3.74292 5.7586C3.99691 5.29 4.38077 4.58174 3.64579 3.71139C3.54613 3.59401 3.39153 3.53861 3.24007 3.56595C3.08852 3.59321 2.96306 3.69916 2.9107 3.84386C2.85836 3.98867 2.88705 4.15036 2.98598 4.2683C3.34097 4.68859 3.22162 4.90866 2.98391 5.34711C2.74351 5.79043 2.38015 6.46057 2.96234 7.29045Z" fill="currentColor"/>
    <path d="M25.4852 1.75063C25.3976 1.67688 25.2844 1.6409 25.1703 1.65043C25.0562 1.66006 24.9506 1.71447 24.8766 1.8018C24.1413 2.67241 24.5252 3.38069 24.7795 3.84928C25.0212 4.29557 25.1172 4.50889 24.853 4.88539C24.7645 5.01167 24.7501 5.17555 24.8152 5.3154C24.8803 5.45516 25.015 5.5496 25.1686 5.56319C25.3223 5.57677 25.4715 5.50742 25.5601 5.38115C26.1421 4.55128 25.7789 3.88115 25.5386 3.43783C25.3008 2.99937 25.1815 2.77928 25.5365 2.35917H25.5364C25.6102 2.27166 25.6463 2.15843 25.6367 2.04429C25.6272 1.93025 25.5727 1.82456 25.4852 1.75063Z" fill="currentColor"/>
    <path d="M23.5765 3.65985C23.4889 3.58601 23.3756 3.54995 23.2616 3.55966C23.1475 3.56928 23.0419 3.62379 22.968 3.71121C22.2329 4.58156 22.6168 5.28982 22.8709 5.75851C23.1129 6.20479 23.2088 6.41786 22.9444 6.79461C22.8559 6.92089 22.8416 7.08477 22.9067 7.22453C22.9717 7.36438 23.1064 7.45883 23.2601 7.47241C23.4137 7.48599 23.5629 7.41656 23.6515 7.29037C24.2337 6.4605 23.8703 5.79037 23.63 5.34705C23.3922 4.9086 23.2729 4.6885 23.6279 4.26824H23.6278C23.7017 4.18073 23.7378 4.06749 23.7281 3.95335C23.7185 3.83931 23.6639 3.73372 23.5765 3.65988L23.5765 3.65985Z" fill="currentColor"/>
    <path d="M8.69155 27.7291C8.69155 27.9675 8.49827 28.1608 8.25984 28.1608C8.0214 28.1608 7.82812 27.9675 7.82812 27.7291C7.82812 27.4906 8.0214 27.2974 8.25984 27.2974C8.49827 27.2974 8.69155 27.4906 8.69155 27.7291Z" fill="currentColor"/>
    <path d="M12.1068 3.40331L12.1537 3.63788L12.1538 3.63779C12.1733 3.73565 12.2262 3.8237 12.3033 3.88692C12.3805 3.95024 12.4773 3.98477 12.577 3.98477H13.8722C13.9719 3.98477 14.0687 3.95024 14.1459 3.88692C14.223 3.82369 14.2759 3.73564 14.2954 3.63779L14.3423 3.40368C16.654 3.66865 18.7996 4.73595 20.4053 6.4199C22.0111 8.10375 22.9756 10.2975 23.1305 12.619H23.9959C23.8407 10.0976 22.8069 7.7102 21.0744 5.87168C19.3418 4.03312 17.0197 2.85984 14.5119 2.55545L14.6239 1.99584V1.99575C14.6746 1.74211 14.609 1.47906 14.445 1.27902C14.281 1.0789 14.036 0.962891 13.7773 0.962891H12.6719C12.4131 0.962891 12.1681 1.07891 12.0042 1.27902C11.8401 1.47904 11.7746 1.74211 11.8253 1.99575L11.9372 2.55499C9.42934 2.85945 7.10731 4.03296 5.37471 5.87145C3.64211 7.71001 2.60854 10.0974 2.45312 12.619H3.31862C3.47359 10.2972 4.43791 8.10369 6.04381 6.41967C7.6497 4.73565 9.7952 3.66823 12.1069 3.40345L12.1068 3.40331ZM13.7773 1.82622L13.5182 3.12135H12.9309L12.6719 1.82622H13.7773Z" fill="currentColor"/>
    <path d="M25.529 13.4824H0.92033C0.766084 13.4824 0.623612 13.5647 0.546457 13.6983C0.469378 13.8318 0.469378 13.9964 0.546457 14.13C0.623626 14.2635 0.766091 14.3458 0.92033 14.3458H1.5169L1.78375 14.8796C1.96192 15.2389 2.23731 15.5412 2.57856 15.7521C2.91978 15.963 3.31327 16.074 3.71441 16.0727H4.45156C4.31045 16.1642 4.19173 16.2865 4.10422 16.4302C3.89646 16.8365 3.88917 17.3163 4.08461 17.7287C4.15287 17.8987 4.2528 18.0542 4.37907 18.187C5.14015 19.0036 5.74795 19.9506 6.17363 20.9826C6.30548 21.296 6.35144 21.6388 6.30683 21.9758C6.10024 23.1937 6.32356 24.4454 6.93839 25.5168C6.74322 25.5317 6.56091 25.6195 6.42762 25.7628C6.29432 25.906 6.21977 26.0942 6.21896 26.2898V28.1607C6.21896 28.3149 6.30116 28.4574 6.43481 28.5345C6.56837 28.6116 6.73286 28.6116 6.86652 28.5345C7.00008 28.4574 7.08238 28.3149 7.08238 28.1607V26.3739H13.9246V28.1607C13.9246 28.3149 14.0069 28.4574 14.1404 28.5345C14.274 28.6116 14.4386 28.6116 14.5722 28.5345C14.7057 28.4574 14.788 28.3149 14.788 28.1607V26.2898C14.7872 26.0905 14.71 25.899 14.5723 25.7549C14.4347 25.6107 14.247 25.5248 14.048 25.5147C15.3465 23.4243 19.3197 20.3761 22.8572 18.0688C23.0412 17.9508 23.1866 17.7813 23.2751 17.5813C23.3636 17.3813 23.3913 17.1598 23.3548 16.9442C23.3243 16.7464 23.2404 16.5607 23.1121 16.4071C22.9838 16.2535 22.816 16.1379 22.6268 16.0728H22.7339C23.135 16.0741 23.5285 15.9631 23.8697 15.7522C24.2111 15.5413 24.4864 15.239 24.6645 14.8796L24.9314 14.3459H25.528C25.6822 14.3459 25.8247 14.2636 25.9018 14.1301C25.9789 13.9965 25.9789 13.8319 25.9018 13.6983C25.8247 13.5648 25.6822 13.4825 25.528 13.4825L25.529 13.4824ZM22.3864 17.3457C19.9794 18.9157 14.4169 22.7544 13.0663 25.5105H7.98473C7.64162 25.0975 6.89852 23.9624 7.16303 22.0971C7.22914 21.6079 7.16366 21.11 6.97335 20.6546C6.50791 19.5257 5.84289 18.4899 5.01013 17.5967C4.95842 17.5431 4.91722 17.4802 4.88872 17.4113C4.80049 17.2462 4.78484 17.052 4.84554 16.875C4.97884 16.7367 5.16384 16.6605 5.35586 16.6646C6.22306 16.5675 8.29034 18.8984 9.48532 20.5974C10.05 21.347 11.5623 22.4626 13.2471 21.3222C15.37 19.8849 19.6847 17.6933 20.9566 17.0559H20.9567C21.3211 16.8662 21.7348 16.7917 22.1427 16.8426C22.2024 16.8509 22.2616 16.8626 22.3199 16.8776C22.4171 16.9015 22.4897 16.9822 22.5035 17.0813C22.5213 17.1849 22.4752 17.2892 22.3865 17.3458L22.3864 17.3457ZM13.4512 20.1609C13.2045 20.3152 12.9732 20.4647 12.7629 20.607C11.3655 21.5537 10.2917 20.2305 10.1835 20.0893C9.75714 19.4829 7.90196 16.9198 6.31142 16.0727H16.404C15.0031 16.782 13.8973 19.0993 13.4511 20.161L13.4512 20.1609ZM17.1347 16.7293C17.1803 16.7234 17.2262 16.7203 17.2721 16.7201C17.3198 16.7148 17.368 16.7212 17.4125 16.7389C17.5024 16.8826 17.3181 17.481 16.9537 18.1602C16.2276 18.5508 15.4784 18.964 14.7763 19.3687C15.4437 18.0869 16.3392 16.8286 17.1347 16.7294L17.1347 16.7293ZM18.1472 16.285V16.285C18.0963 16.2042 18.0322 16.1323 17.9577 16.0725H21.1166C20.9281 16.1255 20.745 16.1963 20.5698 16.2837C20.0983 16.5201 19.2111 16.9688 18.1709 17.5141C18.3078 17.0568 18.3462 16.607 18.1473 16.285L18.1472 16.285ZM23.8932 14.4932L23.8933 14.4933C23.7863 14.7089 23.6212 14.8903 23.4164 15.0168C23.2117 15.1433 22.9756 15.21 22.7349 15.2091H3.71547C3.47479 15.21 3.2387 15.1433 3.03398 15.0168C2.82919 14.8903 2.66407 14.7088 2.55721 14.4933L2.48337 14.3457H23.9669L23.8932 14.4932Z" fill="currentColor"/>
  </svg>
)

export default Butler