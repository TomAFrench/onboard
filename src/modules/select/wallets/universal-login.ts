import { networkName } from '../../../utilities'
import { SdkWalletOptions, WalletModule, Helpers } from '../../../interfaces'

const universalLoginIcon = `
<svg width="38px" height="38px" viewBox="0 0 40 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
            <stop stop-color="#DEEDFF" offset="0%"></stop>
            <stop stop-color="#B2D4FD" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="90.5099108%" y1="0%" x2="87.1713803%" y2="64.3413652%" id="linearGradient-2">
            <stop stop-color="#00D6D9" offset="0%"></stop>
            <stop stop-color="#455CDA" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="64.6799595%" y1="0%" x2="86.6365057%" y2="33.1376881%" id="linearGradient-3">
            <stop stop-color="#00D6D9" offset="0%"></stop>
            <stop stop-color="#1CEFF5" stop-opacity="0.600271797" offset="39.9728203%"></stop>
            <stop stop-color="#04CFD9" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="64.8499715%" y1="50%" x2="71.9489771%" y2="59.7364604%" id="linearGradient-4">
            <stop stop-color="#3F66DA" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#2E2EAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="44.0433845%" y1="43.1588565%" x2="68.2715545%" y2="88.2492958%" id="linearGradient-5">
            <stop stop-color="#2D41B3" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#141E62" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="43.4256771%" y1="20.8070212%" x2="83.6966242%" y2="69.2705637%" id="linearGradient-6">
            <stop stop-color="#3F66DA" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#2436C1" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="79.3077833%" y1="114.195764%" x2="84.2432237%" y2="27.7175609%" id="linearGradient-7">
            <stop stop-color="#706AE1" offset="0%"></stop>
            <stop stop-color="#686CFF" offset="49.6680816%"></stop>
            <stop stop-color="#4352ED" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="190.662895%" y1="0%" x2="100%" y2="118.577563%" id="linearGradient-8">
            <stop stop-color="#00D6D9" offset="0%"></stop>
            <stop stop-color="#0FC4DD" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="32.7679005%" y1="50%" x2="50%" y2="79.2747884%" id="linearGradient-9">
            <stop stop-color="#2D41B3" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#141E62" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="69.9759426%" y1="72.9668913%" x2="38.8788577%" y2="94.8615285%" id="linearGradient-10">
            <stop stop-color="#3F4DDA" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#2736A4" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="8.7306661%" y1="0%" x2="75.7944004%" y2="79.0700426%" id="linearGradient-11">
            <stop stop-color="#00D6D9" offset="0%"></stop>
            <stop stop-color="#5272EE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="-29.3146968%" y1="24.2618014%" x2="28.8065891%" y2="71.1037124%" id="linearGradient-12">
            <stop stop-color="#00D6D9" offset="0%"></stop>
            <stop stop-color="#66E1EA" stop-opacity="0.545403369" offset="45.4596631%"></stop>
            <stop stop-color="#0FC4DD" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="66.5559544%" y1="68.4662762%" x2="98.6029741%" y2="50.771374%" id="linearGradient-13">
            <stop stop-color="#3F4DDA" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#211B9A" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="31.8649546%" y1="67.7403284%" x2="65.9142631%" y2="100%" id="linearGradient-14">
            <stop stop-color="#5272EE" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#292AA8" stop-opacity="0.840023076" offset="72.7546644%"></stop>
            <stop stop-color="#211C9B" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Landing-02" transform="translate(-215.000000, -30.000000)">
            <g id="Group-3" transform="translate(-898.000000, -414.000000)">
                <g id="Group-36" transform="translate(1113.000000, 443.000000)">
                    <path d="M57.792,19.176 L57.792,11.976 L59.504,11.976 L59.504,19.176 C59.504,20.344 59.104,21.304 58.304,22.056 C57.52,22.792 56.56,23.16 55.424,23.16 C54.288,23.16 53.312,22.792 52.512,22.056 C51.728,21.304 51.328,20.344 51.328,19.176 L51.328,11.976 L53.056,11.976 L53.056,19.176 C53.056,19.864 53.28,20.44 53.744,20.872 C54.208,21.304 54.768,21.528 55.424,21.528 C56.08,21.528 56.624,21.304 57.088,20.872 C57.552,20.44 57.792,19.864 57.792,19.176 Z M63.632,18.984 L63.632,23 L61.984,23 L61.984,15.528 L63.632,15.528 L63.632,16.648 C64.032,15.832 65.024,15.368 65.92,15.368 C67.728,15.368 68.768,16.536 68.768,18.648 L68.768,23 L67.12,23 L67.12,18.84 C67.12,17.672 66.512,16.984 65.552,16.984 C64.464,16.984 63.632,17.624 63.632,18.984 Z M72.624,23 L70.992,23 L70.992,15.528 L72.624,15.528 L72.624,23 Z M71.808,11.464 C72.432,11.464 72.896,11.912 72.896,12.504 C72.896,13.096 72.432,13.544 71.808,13.544 C71.216,13.544 70.704,13.08 70.704,12.504 C70.704,11.928 71.216,11.464 71.808,11.464 Z M78.624,23 L77.104,23 L73.984,15.528 L75.728,15.528 L77.872,20.904 L79.984,15.528 L81.744,15.528 L78.624,23 Z M90.208,19.24 C90.208,19.544 90.208,19.736 90.192,19.848 L84.256,19.848 C84.4,21 85.328,21.72 86.544,21.72 C87.392,21.72 88.192,21.336 88.576,20.648 L89.92,21.24 C89.28,22.504 87.952,23.16 86.464,23.16 C85.376,23.16 84.464,22.792 83.728,22.072 C82.992,21.352 82.624,20.408 82.624,19.24 C82.624,18.072 82.992,17.144 83.728,16.44 C84.464,15.72 85.376,15.368 86.464,15.368 C87.552,15.368 88.448,15.72 89.152,16.44 C89.856,17.144 90.208,18.072 90.208,19.24 Z M84.256,18.648 L88.592,18.648 C88.448,17.496 87.6,16.808 86.464,16.808 C85.296,16.808 84.4,17.512 84.256,18.648 Z M93.6,20.312 L93.6,23 L91.952,23 L91.952,15.528 L93.6,15.528 L93.6,17.24 C93.968,15.992 94.64,15.368 95.648,15.368 C96.24,15.368 96.688,15.464 96.976,15.656 L96.704,17.176 C96.368,17 96,16.92 95.6,16.92 C94.256,16.92 93.6,18.216 93.6,20.312 Z M101.088,20.008 L100.08,19.768 C98.528,19.336 97.904,18.568 98.016,17.336 C98.064,16.776 98.336,16.312 98.864,15.944 C99.392,15.56 100,15.368 100.688,15.368 C102.16,15.368 103.328,16.088 103.408,17.576 L101.84,17.576 C101.776,17.048 101.312,16.776 100.752,16.776 C100.32,16.776 99.84,16.936 99.696,17.192 C99.568,17.4 99.552,17.624 99.632,17.864 C99.712,18.104 100.016,18.296 100.544,18.44 L101.696,18.728 C102.992,19.048 103.648,19.768 103.648,20.904 C103.648,22.312 102.416,23.16 100.672,23.16 C99.92,23.16 99.264,22.936 98.688,22.504 C98.112,22.056 97.824,21.464 97.808,20.712 L99.328,20.712 C99.408,21.368 99.952,21.784 100.8,21.784 C101.568,21.784 102.128,21.448 102.128,20.888 C102.128,20.456 101.776,20.168 101.088,20.008 Z M112.896,23 L111.264,23 L111.264,21.928 C110.8,22.696 109.728,23.16 108.752,23.16 C107.712,23.16 106.816,22.792 106.064,22.072 C105.328,21.352 104.96,20.408 104.96,19.256 C104.96,18.104 105.328,17.176 106.064,16.456 C106.816,15.736 107.712,15.368 108.752,15.368 C109.728,15.368 110.768,15.8 111.264,16.584 L111.264,15.528 L112.896,15.528 L112.896,23 Z M111.248,19.24 C111.248,18.552 111.008,17.992 110.544,17.592 C110.08,17.176 109.552,16.968 108.944,16.968 C108.304,16.968 107.76,17.176 107.312,17.608 C106.88,18.024 106.656,18.568 106.656,19.24 C106.656,19.912 106.88,20.472 107.312,20.904 C107.76,21.336 108.304,21.56 108.944,21.56 C110.224,21.56 111.248,20.648 111.248,19.24 Z M116.848,23 L115.2,23 L115.2,11.464 L116.848,11.464 L116.848,23 Z M129.616,23 L123.504,23 L123.504,11.976 L125.2,11.976 L125.2,21.448 L129.616,21.448 L129.616,23 Z M134.608,21.56 C135.248,21.56 135.792,21.352 136.224,20.92 C136.656,20.488 136.88,19.928 136.88,19.24 C136.88,17.896 135.888,16.984 134.608,16.984 C133.984,16.984 133.44,17.192 133.008,17.608 C132.576,18.024 132.352,18.568 132.352,19.24 C132.352,19.928 132.576,20.488 133.008,20.92 C133.44,21.352 133.984,21.56 134.608,21.56 Z M134.608,15.368 C135.712,15.368 136.64,15.72 137.392,16.44 C138.144,17.16 138.528,18.088 138.528,19.24 C138.528,20.392 138.144,21.336 137.376,22.072 C136.624,22.792 135.696,23.16 134.608,23.16 C133.52,23.16 132.592,22.792 131.84,22.072 C131.088,21.336 130.72,20.392 130.72,19.24 C130.72,18.088 131.088,17.16 131.84,16.44 C132.592,15.72 133.52,15.368 134.608,15.368 Z M146.16,19.272 C146.16,17.848 145.152,16.968 143.856,16.968 C143.216,16.968 142.672,17.192 142.24,17.624 C141.808,18.056 141.584,18.6 141.584,19.272 C141.584,19.96 141.808,20.504 142.24,20.936 C142.672,21.368 143.216,21.576 143.856,21.576 C144.448,21.576 144.992,21.368 145.456,20.952 C145.92,20.52 146.16,19.96 146.16,19.272 Z M140.912,24.28 L141.6,23.944 C141.984,24.712 142.864,25.192 143.696,25.192 C145.36,25.192 146.192,24.216 146.192,22.248 L146.192,21.864 C145.76,22.68 144.704,23.16 143.664,23.16 C142.624,23.16 141.728,22.808 140.992,22.088 C140.256,21.368 139.888,20.44 139.888,19.288 C139.888,18.12 140.256,17.176 140.992,16.456 C141.728,15.736 142.624,15.368 143.664,15.368 C144.704,15.368 145.744,15.848 146.192,16.632 L146.192,15.528 L147.808,15.528 L147.808,21.896 C147.808,25.112 146.432,26.728 143.696,26.728 C142.24,26.728 140.944,25.96 140.24,24.632 L140.912,24.28 Z M151.744,23 L150.112,23 L150.112,15.528 L151.744,15.528 L151.744,23 Z M150.928,11.464 C151.552,11.464 152.016,11.912 152.016,12.504 C152.016,13.096 151.552,13.544 150.928,13.544 C150.336,13.544 149.824,13.08 149.824,12.504 C149.824,11.928 150.336,11.464 150.928,11.464 Z M155.696,18.984 L155.696,23 L154.048,23 L154.048,15.528 L155.696,15.528 L155.696,16.648 C156.096,15.832 157.088,15.368 157.984,15.368 C159.792,15.368 160.832,16.536 160.832,18.648 L160.832,23 L159.184,23 L159.184,18.84 C159.184,17.672 158.576,16.984 157.616,16.984 C156.528,16.984 155.696,17.624 155.696,18.984 Z M166.768,19.8 L168.464,19.8 C168.48,20.264 168.704,20.696 169.104,21.064 C169.504,21.432 170.032,21.608 170.656,21.608 C171.888,21.608 172.608,20.952 172.736,20.104 C172.784,19.192 172.208,18.6 170.992,18.312 L169.6,17.96 C167.776,17.464 166.864,16.488 166.864,15 C166.864,14.088 167.216,13.336 167.936,12.744 C168.656,12.152 169.504,11.848 170.496,11.848 C171.536,11.848 172.384,12.152 173.056,12.744 C173.744,13.336 174.08,14.12 174.08,15.112 L172.384,15.112 C172.384,14.104 171.616,13.448 170.464,13.448 C169.424,13.448 168.56,14.072 168.56,14.968 C168.56,15.672 169.056,16.152 170.032,16.408 L171.44,16.776 C173.616,17.352 174.592,18.584 174.416,20.2 C174.336,21.08 173.936,21.784 173.248,22.344 C172.56,22.888 171.696,23.16 170.656,23.16 C169.536,23.16 168.608,22.824 167.872,22.168 C167.136,21.512 166.768,20.712 166.768,19.8 Z M180.88,13.56 L178.288,13.56 L178.288,21.432 L180.88,21.432 C181.92,21.432 182.736,21.064 183.296,20.328 C183.856,19.592 184.144,18.648 184.144,17.512 C184.144,16.36 183.856,15.416 183.28,14.68 C182.72,13.928 181.92,13.56 180.88,13.56 Z M180.88,23 L176.592,23 L176.592,11.976 L180.88,11.976 C182.4,11.976 183.616,12.504 184.496,13.544 C185.392,14.584 185.84,15.896 185.84,17.512 C185.84,19.112 185.392,20.424 184.512,21.464 C183.632,22.488 182.416,23 180.88,23 Z M195.184,11.976 L190.96,17.464 L196.16,23 L193.92,23 L189.808,18.536 L189.808,23 L188.096,23 L188.096,11.976 L189.808,11.976 L189.808,16.456 L193.184,11.976 L195.184,11.976 Z" id="Universal-Login-SDK" fill="#FFFFFF"></path>
                    <g id="Group-2" transform="translate(0.000000, 0.563965)">
                        <path d="M0.317344666,0.590820312 L5.25634766,0.590820313 C10.7791952,0.590820313 15.2563477,5.06797281 15.2563477,10.5908203 L15.2563477,18.5162354 C15.2563477,21.1674314 17.4055667,23.3166504 20.0567627,23.3166504 L20.0567627,23.3166504 C22.7079587,23.3166504 24.8571777,21.1674314 24.8571777,18.5162354 L24.8571777,10.5908203 C24.8571777,5.06797281 29.3343302,0.590820313 34.8571777,0.590820313 L39.8796844,0.590820312 L39.8796844,18.2068825 C39.8796844,29.1317209 31.023353,37.9880524 20.0985146,37.9880524 L20.0985146,37.9880524 C9.17367609,37.9880524 0.317344666,29.1317209 0.317344666,18.2068825 L0.317344666,0.590820312 Z" id="Rectangle-Copy" fill="url(#linearGradient-1)"></path>
                        <path d="M0.317344666,0.590820313 L5.25634766,0.590820313 C10.7791952,0.590820313 15.2563477,5.06797281 15.2563477,10.5908203 L15.2563477,18.5162354 C15.2563477,21.1674314 17.4055667,23.3166504 20.0567627,23.3166504 L20.0567627,23.3166504 C22.7079587,23.3166504 24.8571777,21.1674314 24.8571777,18.5162354 L24.8571777,10.5908203 C24.8571777,5.06797281 29.3343302,0.590820313 34.8571777,0.590820313 L39.8796844,0.590820313 L39.8796844,18.2068825 C39.8796844,29.1317209 31.023353,37.9880524 20.0985146,37.9880524 L20.0985146,37.9880524 C9.17367609,37.9880524 0.317344666,29.1317209 0.317344666,18.2068825 L0.317344666,0.590820313 Z" id="Rectangle-Copy-2" fill="url(#linearGradient-2)"></path>
                        <path d="M0.317344666,0.590820313 L5.25634766,0.590820313 C10.7791952,0.590820313 15.2563477,5.06797281 15.2563477,10.5908203 L15.2563477,18.5162354 C15.2563477,21.1674314 17.4055667,23.3166504 20.0567627,23.3166504 L20.0567627,23.3166504 C22.7079587,23.3166504 24.8571777,21.1674314 24.8571777,18.5162354 L24.8571777,10.5908203 C24.8571777,5.06797281 29.3343302,0.590820313 34.8571777,0.590820313 L39.8796844,0.590820313 L39.8796844,18.2068825 C39.8796844,29.1317209 31.023353,37.9880524 20.0985146,37.9880524 L20.0985146,37.9880524 C9.17367609,37.9880524 0.317344666,29.1317209 0.317344666,18.2068825 L0.317344666,0.590820313 Z" id="Rectangle-Copy-2" fill="url(#linearGradient-3)"></path>
                        <path d="M0.317344666,0.590820312 L5.25634766,0.590820313 C10.7791952,0.590820313 15.2563477,5.06797281 15.2563477,10.5908203 L15.2563477,18.5162354 C15.2563477,21.1674314 17.4055667,23.3166504 20.0567627,23.3166504 L20.0567627,23.3166504 C22.7079587,23.3166504 24.8571777,21.1674314 24.8571777,18.5162354 L24.8571777,10.5908203 C24.8571777,5.06797281 29.3343302,0.590820313 34.8571777,0.590820313 L39.8796844,0.590820312 L39.8796844,18.2068825 C39.8796844,29.1317209 31.023353,37.9880524 20.0985146,37.9880524 L20.0985146,37.9880524 C9.17367609,37.9880524 0.317344666,29.1317209 0.317344666,18.2068825 L0.317344666,0.590820312 Z" id="Rectangle-Copy-2" fill="url(#linearGradient-4)"></path>
                        <path d="M20.4095306,23.3054199 L23.2828369,24.4139404 L27.8881836,23.993042 L29.9803467,23.3054199 L32.4281006,22.4290771 L35.1776123,20.0849609 L37.4313384,18.9438477 L38.4758301,15.8792725 L38.8480225,13.3242188 L39.4108887,11.4880371 L39.4108887,8.45532227 L39.7536621,5.66662598 L39.7536621,3.43884277 C39.0922437,7.98912423 38.7043042,9.08145007 38.0738525,10.3824463 C37.128175,12.3339406 37.128175,12.3739797 35.8517417,14.1326904 C34.5753083,15.8914012 34.3430791,16.2376099 31.9105837,18.3234863 C30.2889202,19.7140706 27.4579671,20.9425863 23.4177246,22.0090332 L22.9411863,22.3429902 C22.6369311,22.5562115 22.31824,22.7480525 21.9874115,22.9171295 L21.4360962,23.1240997 L20.792923,23.2653809 L20.4095306,23.3054199 Z" id="Path-4" fill="url(#linearGradient-5)"></path>
                        <path d="M0.317344666,0.590820312 L5.25634766,0.590820313 C10.7791952,0.590820313 15.2563477,5.06797281 15.2563477,10.5908203 L15.2563477,18.5162354 C15.2563477,21.1674314 17.4055667,23.3166504 20.0567627,23.3166504 L20.0567627,23.3166504 C22.7079587,23.3166504 24.8571777,21.1674314 24.8571777,18.5162354 L24.8571777,10.5908203 C24.8571777,5.06797281 29.3343302,0.590820313 34.8571777,0.590820313 L39.8796844,0.590820312 L39.8796844,18.2068825 C39.8796844,29.1317209 31.023353,37.9880524 20.0985146,37.9880524 L20.0985146,37.9880524 C9.17367609,37.9880524 0.317344666,29.1317209 0.317344666,18.2068825 L0.317344666,0.590820312 Z" id="Rectangle-Copy-2" fill="url(#linearGradient-6)"></path>
                        <path d="M0.317344666,0.590820313 L5.25634766,0.590820313 C10.7791952,0.590820313 15.2563477,5.06797281 15.2563477,10.5908203 L15.2563477,18.4744835 C15.2563477,21.1487384 17.4242596,23.3166504 20.0985146,23.3166504 L20.0985146,23.3166504 C23.2422458,23.3166504 26.3423443,22.5808797 29.1507937,21.1682021 L29.3690491,21.0584176 C32.3126716,19.5777465 34.8268933,17.3661862 36.670974,14.6354964 L36.6881561,14.6100533 C38.5375202,11.87154 39.5822653,8.66948354 39.7038388,5.36723846 L39.8796844,0.590820313 L39.8796844,18.2068825 C39.8796844,29.1317209 31.023353,37.9880524 20.0985146,37.9880524 L20.0985146,37.9880524 C9.17367609,37.9880524 0.317344666,29.1317209 0.317344666,18.2068825 L0.317344666,0.590820313 Z" id="Rectangle-Copy-3" fill="url(#linearGradient-7)"></path>
                        <path d="M0.317344666,0.590820312 L5.25634766,0.590820313 C10.7791952,0.590820313 15.2563477,5.06797281 15.2563477,10.5908203 L15.2563477,18.4744835 C15.2563477,21.1487384 17.4242596,23.3166504 20.0985146,23.3166504 L20.0985146,23.3166504 C23.2422458,23.3166504 26.3423443,22.5808797 29.1507937,21.1682021 L29.3690491,21.0584176 C32.3126716,19.5777465 34.8268933,17.3661862 36.670974,14.6354964 L36.6881561,14.6100533 C38.5375202,11.87154 39.5822653,8.66948354 39.7038388,5.36723846 L39.8796844,0.590820312 L39.8796844,18.2068825 C39.8796844,29.1317209 31.023353,37.9880524 20.0985146,37.9880524 L20.0985146,37.9880524 C9.17367609,37.9880524 0.317344666,29.1317209 0.317344666,18.2068825 L0.317344666,0.590820312 Z" id="Rectangle-Copy-3" fill="url(#linearGradient-8)"></path>
                        <path d="M8.18635942,34.1124982 L10.8962191,33.1810731 L15.4089897,31.4975803 L17.5937289,32.0725526 L20.0414828,31.1962098 L22.7909945,28.8520936 L25.0447207,27.7109803 L26.0892123,24.6464051 L26.4614047,22.0913514 L26.1810379,20.5219204 L25.974991,20.1175305 C26.0190323,21.4542722 25.8663862,22.3952238 25.5170528,22.9403853 C25.1677194,23.4855469 24.6058506,24.0951536 23.8314464,24.7692056 L12.8673457,30.355694 L12.5495354,31.0088812 L12.3358356,31.3356893 L12.2715635,31.4205281 C12.1788936,31.5428519 12.0822299,31.662098 11.9817287,31.7780735 L11.9817287,31.7780735 C11.8812695,31.8940008 11.7748054,32.0045851 11.6627743,32.1093716 L11.6463541,32.1247299 C11.5234209,32.2397136 11.3933825,32.3468575 11.257008,32.4455279 L11.139912,32.5302499 L10.6538123,32.8552681 L8.18635942,34.1124982 Z" id="Path-4" fill="url(#linearGradient-9)" transform="translate(17.323882, 27.115014) rotate(117.000000) translate(-17.323882, -27.115014) "></path>
                        <path d="M0.317344666,0.590820312 L5.25634766,0.590820313 C10.7791952,0.590820313 15.2563477,5.06797281 15.2563477,10.5908203 L15.2563477,18.4744835 C15.2563477,21.1487384 17.4242596,23.3166504 20.0985146,23.3166504 L20.0985146,23.3166504 C23.2422458,23.3166504 26.3423443,22.5808797 29.1507937,21.1682021 L29.3690491,21.0584176 C32.3126716,19.5777465 34.8268933,17.3661862 36.670974,14.6354964 L36.6881561,14.6100533 C38.5375202,11.87154 39.5822653,8.66948354 39.7038388,5.36723846 L39.8796844,0.590820312 L39.8796844,18.2068825 C39.8796844,29.1317209 31.023353,37.9880524 20.0985146,37.9880524 L20.0985146,37.9880524 C9.17367609,37.9880524 0.317344666,29.1317209 0.317344666,18.2068825 L0.317344666,0.590820312 Z" id="Rectangle-Copy-3" fill="url(#linearGradient-10)"></path>
                        <path d="M0.317344666,0.590820313 L5.25634766,0.590820313 C10.7791952,0.590820313 15.2563477,5.06797281 15.2563477,10.5908203 L15.2563477,13.0108643 L15.2563477,33.1458855 C15.2563477,35.8201404 17.4242596,37.9880524 20.0985146,37.9880524 L20.0985146,37.9880524 C9.17367609,37.9880524 0.317344666,29.1317209 0.317344666,18.2068825 L0.317344666,0.590820313 Z" id="Rectangle-Copy-4" fill="url(#linearGradient-11)"></path>
                        <path d="M0.317344666,0.590820313 L5.25634766,0.590820313 C10.7791952,0.590820313 15.2563477,5.06797281 15.2563477,10.5908203 L15.2563477,13.0108643 L15.2563477,33.1458855 C15.2563477,35.8201404 17.4242596,37.9880524 20.0985146,37.9880524 L20.0985146,37.9880524 C9.17367609,37.9880524 0.317344666,29.1317209 0.317344666,18.2068825 L0.317344666,0.590820313 Z" id="Rectangle-Copy-4" fill="url(#linearGradient-12)"></path>
                        <path d="M0.316871643,0.602767944 L5.25587463,0.602767944 C10.7787221,0.602767944 15.2558746,5.07992045 15.2558746,10.6027679 L15.2558746,18.4864311 C15.2558746,21.1606861 17.4237866,23.328598 20.0980415,23.328598 L20.0980415,23.328598 C23.2417727,23.328598 26.3418713,22.5928274 29.1503207,21.1801498 L29.368576,21.0703652 C32.3121986,19.5896942 34.8264203,17.3781338 36.670501,14.647444 L36.6876831,14.6220009 C38.5370472,11.8834876 39.5817923,8.68143117 39.7033657,5.37918609 L39.8792114,0.602767944 L39.8792114,18.2188301 C39.8792114,29.1436686 31.02288,38 20.0980415,38 L20.0980415,38 C9.17320307,38 0.316871643,29.1436686 0.316871643,18.2188301 L0.316871643,0.602767944 Z" id="Rectangle-Copy-3" fill="url(#linearGradient-13)"></path>
                        <path d="M0.317344666,0.590820313 L5.25634766,0.590820313 C10.7791952,0.590820313 15.2563477,5.06797281 15.2563477,10.5908203 L15.2563477,13.0108643 L15.2563477,33.1458855 C15.2563477,35.8201404 17.4242596,37.9880524 20.0985146,37.9880524 L20.0985146,37.9880524 C9.17367609,37.9880524 0.317344666,29.1317209 0.317344666,18.2068825 L0.317344666,0.590820313 Z" id="Rectangle-Copy-4" fill="url(#linearGradient-14)"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
`

function universalLogin(options: SdkWalletOptions): WalletModule {
  const { apiKey, networkId, preferred, label, iconSrc, svg } = options

  return {
    name: label || 'Universal Login',
    svg: svg || universalLoginIcon,
    iconSrc,
    wallet: async (helpers: Helpers) => {
      const { ULWeb3Provider } = await import('@universal-login/web3')

      const provider = ULWeb3Provider.getDefaultProvider(networkName(networkId))
      console.log({ provider })
      const { BigNumber } = helpers

      const getAddress = (): Promise<string | null> => {
        return new Promise((resolve, reject) => {
          let [address] = provider.getAccounts()
          if (!address) {
            provider.send(
              {
                method: 'eth_accounts',
                params: [],
                id: 42
              },
              (e: any, res: { result: string }) => {
                if (e) reject(e.message)
                address = res && res.result && res.result[0]
                address ? resolve(address) : resolve(null)
              }
            )
          } else {
            resolve(address)
          }
        })
      }

      return {
        provider,
        interface: {
          name: 'Universal Login',
          connect: () => provider.create(),
          disconnect: () => provider.finalizeAndStop(),
          address: {
            get: () => getAddress()
          },
          network: {
            get: () => Promise.resolve(networkId)
          },
          balance: {
            get: async () => {
              const address = await getAddress()
              if (!address) return null

              return new Promise((resolve, reject) => {
                provider.send(
                  {
                    method: 'eth_getBalance',
                    params: [address, 'latest'],
                    id: 42
                  },
                  (e: any, res: any) => {
                    if (e) reject(e.message)
                    resolve(BigNumber(res.result).toString(10))
                  }
                )
              })
            }
          }
        }
      }
    },
    desktop: true,
    mobile: true,
    preferred
  }
}

export default universalLogin
