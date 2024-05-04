import { ContentTemplateProps } from "../interfaces/interface";
import styles from "./ContentTemplate.module.css";

function ContentTemplate({
  contentName,
  contentHeadline,
  contentComponent
}: ContentTemplateProps) {
  return (
    <div className={styles.template}>
      <div className={styles.headline}>
        <h3>
          <span>\</span>
          {contentName}
        </h3>
        <p>{contentHeadline}</p>
      </div>
      <div className={styles.content}>{contentComponent}</div>
    </div>
  );
}

export default ContentTemplate;
