import React from 'react'
import { type LucideProps } from 'lucide-react'

const FoodAndDining: React.FC<LucideProps> = (props: LucideProps) => (
  <svg viewBox="0 0 26 22" fill="currentColor" {...props}>
    <path d="M3.80566 10.1552C3.77607 10.2888 3.66585 10.3789 3.54206 10.3789C3.52052 10.3789 3.5017 10.376 3.48016 10.3702C2.96111 10.2395 2.5093 9.95178 2.17313 9.54509C1.99559 9.32718 1.8585 9.086 1.77244 8.82742C1.72131 8.67638 1.79397 8.50784 1.93378 8.45261C2.07359 8.39738 2.22959 8.47588 2.28071 8.62692C2.34523 8.81873 2.44477 8.99587 2.57923 9.15864C2.84012 9.47529 3.19509 9.69906 3.60657 9.80368C3.75189 9.84142 3.84065 9.99832 3.80564 10.1552L3.80566 10.1552ZM5.15577 12.8224V19.4788C5.15577 20.4754 5.83615 21.2831 6.67257 21.2831H7.25614C7.40409 21.2831 7.52508 21.4138 7.52508 21.5736C7.52508 21.7335 7.40409 21.8642 7.25614 21.8642L0.992602 21.8641C0.844651 21.8641 0.723665 21.7334 0.723665 21.5736C0.723665 21.4137 0.844651 21.283 0.992602 21.283H1.57617C2.41257 21.283 3.09298 20.4724 3.09298 19.4787L3.09306 12.8223C3.09306 12.2383 2.85371 11.6921 2.45302 11.3522C2.00391 11.1256 1.60313 10.806 1.2751 10.4079C0.651162 9.64666 0.366112 8.69367 0.476331 7.71747L1.15401 1.62473C1.19971 1.20349 1.55208 0.883789 1.97157 0.883789H6.25574C6.67263 0.883789 7.0249 1.20044 7.07059 1.62177L7.76709 7.7058C7.88003 8.68203 7.5977 9.64088 6.97378 10.4021C6.64565 10.803 6.24225 11.1227 5.79314 11.3493C5.39507 11.6892 5.15574 12.2383 5.15574 12.8223L5.15577 12.8224ZM1.3019 5.20722H6.93882L6.53812 1.69453C6.52464 1.56666 6.40094 1.46792 6.25843 1.46792H1.97427C1.83174 1.46792 1.70804 1.56666 1.69457 1.69453L1.3019 5.20722ZM4.12574 11.1663C5.08313 11.1663 5.97336 10.7479 6.57037 10.0158C7.08942 9.37943 7.32606 8.58629 7.23467 7.77564L7.00881 5.78836L1.23742 5.78827L1.01419 7.78434C0.925417 8.59203 1.16214 9.38527 1.68119 10.0187C2.27817 10.7479 3.16839 11.1663 4.12583 11.1663L4.12574 11.1663ZM4.6152 19.4788V12.8224C4.6152 12.4156 4.7066 12.0205 4.87065 11.6748C4.62858 11.7242 4.37847 11.7504 4.12574 11.7504C3.87291 11.7504 3.6228 11.7243 3.38083 11.6748C3.54489 12.0234 3.63627 12.4158 3.63627 12.8224V19.4788C3.63627 20.1994 3.35929 20.8443 2.92357 21.2831H5.33055C4.89221 20.8443 4.61523 20.1993 4.61523 19.4787L4.6152 19.4788ZM16.6797 14.6935C16.7389 14.6935 16.7981 14.6732 16.8491 14.6296C17.0508 14.4524 17.2848 14.3304 17.543 14.2607L18.9845 13.8771C19.1297 13.8394 19.2185 13.6796 19.1835 13.5256C19.1485 13.3687 19.0006 13.2728 18.8581 13.3106L17.4166 13.6941C17.0804 13.7842 16.7765 13.944 16.5129 14.1735C16.3973 14.2752 16.3785 14.4583 16.4726 14.5833C16.5211 14.6558 16.6017 14.6935 16.6797 14.6935ZM25.5519 10.1668C25.5035 10.4777 25.3475 10.7509 25.1109 10.9368C24.9333 11.0763 24.721 11.1518 24.5031 11.1576L22.1687 12.9706L20.7407 15.4054C21.1306 15.5768 21.5286 15.7279 21.9267 15.8558C21.932 15.8587 21.9375 15.8587 21.9428 15.8616C22.7846 16.1928 23.3036 17.1254 23.153 18.029C23.0777 18.4881 22.8384 18.8949 22.4968 19.1796H23.9007C24.1535 19.1796 24.3606 19.4033 24.3606 19.6764C24.3606 20.8851 23.4516 21.8671 22.3328 21.8671L9.95092 21.8672C8.8321 21.8672 7.92314 20.8852 7.92314 19.6765C7.92314 19.4034 8.13019 19.1797 8.38302 19.1797H9.77612C8.63313 17.8519 8.4583 16.2975 8.43677 15.6757V15.6611C8.4717 13.4704 9.7438 11.547 11.5995 10.8759C13.17 10.3093 14.9397 10.7306 16.2117 11.9741C16.2171 11.9799 16.2252 11.9857 16.2305 11.9944C16.3973 12.192 16.5694 12.3837 16.7416 12.5668C16.868 12.5175 16.997 12.4739 17.1261 12.439L21.1091 11.3843L23.4435 9.57132C23.5187 9.35048 23.6532 9.15877 23.8307 9.01926C24.0674 8.83625 24.3579 8.76068 24.6456 8.81299C24.9333 8.8653 25.1862 9.03383 25.3583 9.28948C25.5304 9.54228 25.6003 9.856 25.5519 10.1669L25.5519 10.1668ZM15.1898 14.9637C14.937 15.7047 15.0096 16.4571 15.3888 17.0266C15.768 17.599 16.4053 17.9128 17.1342 17.8895C18.0808 17.8605 18.9926 17.2881 19.5143 16.3991L21.7357 12.6162C21.7357 12.6162 21.7357 12.6132 21.7384 12.6132L21.7572 12.5842C21.8648 12.4012 21.8729 12.2094 21.7788 12.067C21.7088 11.9624 21.5959 11.9044 21.4614 11.9044C21.4157 11.9044 21.37 11.9101 21.3189 11.9247L17.2553 13.0025C16.3086 13.2524 15.5179 14.005 15.1898 14.9637L15.1898 14.9637ZM23.82 19.7635H20.461H20.4582H20.4555H10.4618H10.4591H10.4564H8.46355C8.50662 20.6091 9.15471 21.2831 9.94803 21.2831H22.3326C23.1288 21.2831 23.7769 20.609 23.8199 19.7635H23.82ZM20.4475 15.9022L19.9742 16.7099C19.3583 17.7617 18.2772 18.4358 17.153 18.4706H17.0616C16.1876 18.4706 15.4211 18.0696 14.9505 17.3636C14.4637 16.6315 14.3669 15.6814 14.6815 14.7574C14.9585 13.9439 15.5179 13.2582 16.2199 12.8253C16.0908 12.6858 15.9644 12.5405 15.838 12.3924C14.7085 11.2971 13.1513 10.9251 11.7663 11.4248C10.1338 12.0205 9.00972 13.7202 8.97722 15.6639C8.99876 16.2392 9.16544 17.6861 10.2627 18.8861C10.3568 18.9907 10.4564 19.0866 10.5585 19.1795H20.4419L21.671 18.979C22.1685 18.8425 22.5423 18.4299 22.6284 17.9244C22.7333 17.2967 22.3648 16.6489 21.7705 16.4106C21.3214 16.2682 20.8777 16.0968 20.4474 15.9022L20.4475 15.9022ZM24.9226 9.62642C24.8366 9.49571 24.7074 9.41144 24.5623 9.38524C24.4171 9.35914 24.2692 9.39688 24.1481 9.48985C24.0432 9.57119 23.968 9.69035 23.9357 9.824C23.9357 9.82977 23.9329 9.8327 23.9303 9.83563C23.9276 9.84433 23.925 9.85597 23.9195 9.86467C23.9168 9.87337 23.9115 9.88207 23.9088 9.88793C23.9034 9.89664 23.9007 9.90534 23.8953 9.9112C23.89 9.9199 23.8845 9.92577 23.8792 9.93447C23.8738 9.94024 23.8684 9.94903 23.8631 9.9548C23.855 9.9635 23.8496 9.96937 23.8415 9.97514L23.8335 9.98384L21.9402 11.454C22.0478 11.5208 22.1446 11.6109 22.2199 11.7242C22.2952 11.8375 22.3436 11.9654 22.3678 12.0961L24.2611 10.6259C24.2639 10.623 24.2692 10.6201 24.2746 10.6172C24.2827 10.6114 24.2881 10.6085 24.2962 10.6027C24.3042 10.5969 24.3123 10.594 24.3203 10.591C24.3284 10.5881 24.3364 10.5852 24.3445 10.5823C24.3525 10.5794 24.3633 10.5765 24.3714 10.5765C24.3794 10.5736 24.3875 10.5736 24.3955 10.5736H24.4251H24.4386C24.565 10.5823 24.694 10.5446 24.7989 10.4632C24.9199 10.3703 24.9979 10.2308 25.0222 10.074C25.0436 9.91403 25.0087 9.75712 24.9226 9.62642ZM10.1768 15.6494C10.1929 15.077 10.3409 14.5192 10.6044 14.034C10.6797 13.8945 10.6367 13.7174 10.5076 13.6359C10.3784 13.5546 10.2145 13.601 10.1391 13.7405C9.82708 14.3129 9.65496 14.9724 9.63887 15.6465V15.6668C9.65769 16.0997 9.76799 16.951 10.2816 17.7879C10.3328 17.8721 10.4188 17.9186 10.5075 17.9186C10.5586 17.9186 10.6097 17.904 10.6581 17.8692C10.7818 17.7792 10.8167 17.599 10.7334 17.4653C10.2898 16.7506 10.1929 16.0272 10.1768 15.6494ZM14.816 7.93254C14.6411 8.08945 14.4018 8.30734 14.4018 8.72861C14.4018 8.88845 14.5228 9.01916 14.6707 9.01916C14.8187 9.01916 14.9397 8.88845 14.9397 8.72861C14.9397 8.59204 14.9962 8.5281 15.1602 8.38C15.335 8.2231 15.5744 8.0052 15.5744 7.58393C15.5744 7.15974 15.335 6.94478 15.1602 6.78786C14.9962 6.63966 14.9397 6.57572 14.9397 6.43926C14.9397 6.30269 14.9962 6.23875 15.1602 6.09065C15.335 5.93374 15.5744 5.71585 15.5744 5.29458C15.5744 5.13474 15.4534 5.00404 15.3054 5.00404C15.1575 5.00404 15.0365 5.13474 15.0365 5.29458C15.0365 5.43115 14.98 5.49509 14.816 5.64319C14.6411 5.80009 14.4018 6.01799 14.4018 6.43926C14.4018 6.86345 14.6412 7.07841 14.816 7.23533C14.98 7.38353 15.0365 7.44747 15.0365 7.58393C15.0365 7.72041 14.98 7.78434 14.816 7.93254ZM12.0916 7.93254C11.9168 8.08945 11.6775 8.30734 11.6775 8.72861C11.6775 8.88845 11.7985 9.01916 11.9464 9.01916C12.0944 9.01916 12.2154 8.88845 12.2154 8.72861C12.2154 8.59204 12.2718 8.5281 12.4359 8.38C12.6107 8.2231 12.85 8.0052 12.85 7.58393C12.85 7.15974 12.6107 6.94478 12.4359 6.78786C12.2718 6.63966 12.2154 6.57572 12.2154 6.43926C12.2154 6.30269 12.2718 6.23875 12.4359 6.09065C12.6107 5.93374 12.85 5.71585 12.85 5.29458C12.85 5.13474 12.7291 5.00404 12.5811 5.00404C12.4332 5.00404 12.3122 5.13474 12.3122 5.29458C12.3122 5.43115 12.2557 5.49509 12.0916 5.64319C11.9168 5.80009 11.6775 6.01799 11.6775 6.43926C11.6775 6.86345 11.9168 7.07841 12.0916 7.23533C12.2557 7.38353 12.3122 7.44747 12.3122 7.58393C12.3122 7.72041 12.2557 7.78434 12.0916 7.93254ZM17.5403 7.93254C17.3655 8.08945 17.1261 8.30734 17.1261 8.72861C17.1261 8.88845 17.2471 9.01916 17.3951 9.01916C17.543 9.01916 17.664 8.88845 17.664 8.72861C17.664 8.59204 17.7205 8.5281 17.8845 8.38C18.0594 8.2231 18.2987 8.0052 18.2987 7.58393C18.2987 7.15974 18.0593 6.94478 17.8845 6.78786C17.7205 6.63966 17.664 6.57572 17.664 6.43926C17.664 6.30269 17.7205 6.23875 17.8845 6.09065C18.0594 5.93374 18.2987 5.71585 18.2987 5.29458C18.2987 5.13474 18.1777 5.00404 18.0298 5.00404C17.8818 5.00404 17.7608 5.13474 17.7608 5.29458C17.7608 5.43115 17.7044 5.49509 17.5403 5.64319C17.3655 5.80009 17.1261 6.01799 17.1261 6.43926C17.1261 6.86345 17.3655 7.07841 17.5403 7.23533C17.7044 7.38353 17.7608 7.44747 17.7608 7.58393C17.7609 7.72041 17.7044 7.78434 17.5403 7.93254Z" fill="currentColor"/>
  </svg>
)

export default FoodAndDining