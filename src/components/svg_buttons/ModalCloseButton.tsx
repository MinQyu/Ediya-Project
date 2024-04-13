function ModalCloseButton({ onClick }: any) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <mask
        id="mask0_5820_2077"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="5"
        y="5"
        width="10"
        height="10"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.0834 14.3763L9.85095 11.1438L6.61846 14.3763C6.26141 14.7333 5.68252 14.7333 5.32547 14.3763C4.96842 14.0192 4.96842 13.4403 5.32547 13.0833L8.55796 9.85077L5.32547 6.61828C4.96842 6.26123 4.96842 5.68234 5.32547 5.32529C5.68252 4.96824 6.26141 4.96824 6.61846 5.32529L9.85095 8.55778L13.0834 5.32529C13.4405 4.96824 14.0194 4.96824 14.3764 5.32529C14.7335 5.68234 14.7335 6.26123 14.3764 6.61828L11.1439 9.85077L14.3764 13.0833C14.7335 13.4403 14.7335 14.0192 14.3764 14.3763C14.0194 14.7333 13.4405 14.7333 13.0834 14.3763Z"
          fill="black"
        />
      </mask>
      <g mask="url(#mask0_5820_2077)">
        <path d="M0 0H20V20H0V0Z" fill="black" />
      </g>
    </svg>
  );
}

export default ModalCloseButton;
