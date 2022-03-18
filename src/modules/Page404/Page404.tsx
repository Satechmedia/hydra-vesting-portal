import { useTranslation } from "react-i18next";
import { Label } from "../../common/components/Label/Label";

const Page404 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Label>{t("not-found")}</Label>
    </div>
  );
};

export default Page404;
