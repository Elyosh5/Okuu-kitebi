import scss from "./Map.module.scss";

const Map = () => {
  return (
    <div className={scss.Map}>
      <iframe
        src="https://yandex.com/map-widget/v1/?ll=74.618244%2C42.879220&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo1MDY2ODMwMzc2EkjQmtGL0YDQs9GL0LfRgdGC0LDQvSwg0JHQuNGI0LrQtdC6LCDQmNCx0YDQsNC40LzQvtCyINC606nRh9Op0YHSrywgMTAzLzIiCg2KPJVCFVOEK0I%2C&z=17.37"
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: "16px" }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
