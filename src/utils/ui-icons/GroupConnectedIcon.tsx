import { Icon } from '@chakra-ui/react';
import { PropsWithChildren } from "react";

export interface Props {
  boxSize?: string;
}

export const GroupConnectedIcon = (props: PropsWithChildren<Props>) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M12.0008 4.00902C11.2209 4.00902 10.4411 4.00848 9.66122 4.00793C8.10153 4.00684 6.54184 4.00574 4.98215 4.00902C4.23684 4.00902 3.56172 4.19115 3.21747 4.92869C3.09278 5.18572 3.02176 5.46467 3.00859 5.74908C2.98853 7.15688 2.99438 8.56468 3.00107 9.97248C3.00107 10.6288 3.48401 10.9939 4.02628 10.7543C4.38139 10.5968 4.45492 10.2834 4.45408 9.93392V6.03868C4.45408 5.46441 4.48417 5.43241 5.06487 5.43241H18.9358C19.5207 5.43241 19.5474 5.46277 19.5474 6.03786C19.5474 6.47541 19.547 6.91295 19.5465 7.3505C19.5456 8.22526 19.5446 9.10099 19.5474 9.97576C19.5474 10.6181 20.0153 11.0062 20.5258 10.7494C20.7406 10.6419 20.9712 10.3244 20.977 10.0931C21.0163 8.59011 21.0322 7.08551 20.9829 5.5809C20.9503 4.58658 20.1724 4.00246 19.0177 4C16.6793 4.00273 14.3403 4.00574 12.0008 4.00902Z"
      fill="currentColor"
    />
    <path
      d="M19.0269 19.7114C19.2636 19.7114 19.5003 19.7121 19.7371 19.7128C20.2106 19.7143 20.684 19.7157 21.1575 19.7114C21.8168 19.704 22.0967 19.3586 21.9705 18.7269C21.7432 17.5956 20.9795 16.8982 19.7855 16.8211C19.1609 16.7829 18.534 16.8027 17.9131 16.8802C16.8987 17.0032 16.0749 17.9467 16.0389 18.9427C16.0222 19.4234 16.3063 19.6999 16.8553 19.7073C17.3752 19.7155 17.8955 19.714 18.4157 19.7125C18.6193 19.712 18.8234 19.7114 19.0269 19.7114Z"
      fill="currentColor"
    />
    <path
      d="M12.7105 19.7118C12.4741 19.7111 12.2372 19.7103 12.0011 19.7103C11.7701 19.7103 11.5386 19.7111 11.3067 19.7118C10.816 19.7135 10.3227 19.7151 9.82867 19.7095C9.28138 19.7021 8.99813 19.4232 9.01568 18.9416C9.05495 17.9481 9.87629 17.0055 10.8932 16.8816C11.5137 16.804 12.1404 16.7845 12.7648 16.8234C13.9596 16.9021 14.7225 17.6003 14.9481 18.7316C15.0726 19.3576 14.7901 19.7029 14.1309 19.7103C13.6579 19.7147 13.184 19.7132 12.7105 19.7118Z"
      fill="currentColor"
    />
    <path
      d="M5.00481 19.7108H7.05191C7.79471 19.7108 8.0696 19.3745 7.91753 18.6739C7.67606 17.568 6.90903 16.887 5.73174 16.8214C5.09318 16.7868 4.45274 16.8093 3.81834 16.8887C2.84994 17.0085 2.01773 17.9962 2.00018 18.9602C1.99183 19.4229 2.27006 19.6985 2.79145 19.7084C3.3038 19.7164 3.81616 19.7144 4.32852 19.7125C4.55395 19.7117 4.77938 19.7108 5.00481 19.7108Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.0368 11.8917C20.0821 11.9106 21.0112 12.8327 21.0012 13.8442C20.9911 14.8558 20.0236 15.7845 19.005 15.7656C17.9598 15.7467 17.0306 14.8246 17.0407 13.8131C17.0507 12.8015 18.0158 11.8728 19.0368 11.8917ZM18.6523 13.4797C18.5554 13.5774 18.5007 13.708 18.4995 13.8442C18.5015 13.9116 18.5173 13.9788 18.5459 14.0401C18.5745 14.1014 18.6153 14.1564 18.6659 14.2019C18.7166 14.2474 18.776 14.2825 18.8407 14.3051C18.9054 14.3276 18.9741 14.3372 19.0426 14.3332C19.3459 14.3119 19.5222 14.1404 19.5398 13.841C19.5398 13.7045 19.4853 13.5734 19.388 13.476C19.2906 13.3786 19.1582 13.3226 19.0192 13.32C18.8805 13.3249 18.7491 13.3821 18.6523 13.4797Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.021 13.8284C10.021 14.8407 10.9644 15.7653 12.0005 15.7661C13.0365 15.767 13.9807 14.8424 13.9815 13.83C13.9824 12.8176 13.0382 11.8922 12.0013 11.8914C10.9644 11.8906 10.0219 12.8152 10.021 13.8284ZM11.9846 14.3387C11.9156 14.3377 11.8475 14.323 11.7845 14.2954C11.7215 14.2678 11.6648 14.228 11.618 14.1783C11.5711 14.1286 11.535 14.07 11.5118 14.0062C11.4887 13.9424 11.4789 13.8746 11.4832 13.807C11.4878 13.6765 11.5443 13.553 11.6404 13.4628C11.7366 13.3727 11.865 13.3231 11.9979 13.3246C12.2745 13.3074 12.5252 13.5708 12.5227 13.8407C12.5208 13.9081 12.5054 13.9745 12.4774 14.036C12.4493 14.0976 12.4091 14.153 12.359 14.1992C12.309 14.2455 12.2502 14.2815 12.1859 14.3053C12.1216 14.3291 12.0532 14.341 11.9846 14.3387Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.96361 13.8286C6.96528 14.8828 6.0821 15.7196 4.97083 15.7155C3.88294 15.7073 3.01147 14.8795 3.00311 13.845C2.99475 12.8318 3.93224 11.9047 4.975 11.8949C6.0044 11.8851 6.96361 12.8154 6.96361 13.8286ZM4.46123 13.8609C4.48249 14.1252 4.64956 14.2946 4.95579 14.3257C5.02489 14.3319 5.09454 14.3238 5.16033 14.3022C5.22612 14.2805 5.28661 14.2457 5.33797 14.1999C5.38934 14.1541 5.43046 14.0983 5.45874 14.0361C5.48701 13.9739 5.50182 13.9066 5.50223 13.8384C5.4897 13.5365 5.30588 13.3642 5.0101 13.3281C4.73691 13.2954 4.4712 13.5488 4.46123 13.8609Z"
      fill="currentColor"
    />
  </Icon>
);
