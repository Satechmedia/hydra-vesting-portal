import { Label } from "../../common/components/Label/Label";

type Props = {
  href: string;
  text: string;
};
const CustomToastWithLink = ({ href, text }: Props) => (
  <div>
    <a href={href} target="_blank" rel="noreferrer" style={{ color: "white" }}>
      <Label>Transaction url:</Label> {text}
    </a>
  </div>
);

export default CustomToastWithLink;
