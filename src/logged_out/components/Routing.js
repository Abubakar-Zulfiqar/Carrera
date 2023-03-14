import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";

import Home from "./home/Home";
import N_571 from "./beauty/N_571";
import N_631 from "./styling/N_631";
import N_531 from "./styling/N_531";
import N_532 from "./styling/N_532";
import N_534 from "./styling/N_534";
import N_535 from "./styling/N_535";
import N_537 from "./styling/N_537";
import N_521 from "./grooming/N_521";
import N_421 from "./grooming/N_421";
import N_622 from "./grooming/N_622";
import N_524 from "./grooming/N_524";
import N_623 from "./grooming/N_623";
import N_526 from "./grooming/N_526";
import N_551 from "./kitchen/N_551"
import N_651 from "./kitchen/N_651"
import N_552 from "./kitchen/N_552"
import N_655 from "./kitchen/N_655"
import N_657 from "./kitchen/N_657"
import N_554 from "./kitchen/N_554"
import N_555 from "./kitchen/N_555"
import Beauty from "./beauty/Beauty";
import Styling from "./styling/Styling";
import Kitchen from "./kitchen/Kitchen";
import Grooming from "./grooming/Grooming";
import PropsRoute from "../../shared/components/PropsRoute";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";
import Animation from "./Particals Animation/Animation";
import Cart from "./cart/Cart";

function Routing(props) {
  const { selectHome } = props;
  useLocationBlocker();
  return (
    <Switch>
      <PropsRoute exact path="/cart" component={Cart} />
      <PropsRoute exact path="/beauty" component={Beauty} />
      <PropsRoute exact path="/styling" component={Styling} />
      <PropsRoute exact path="/kitchen" component={Kitchen} />
      <PropsRoute exact path="/grooming" component={Grooming} />
      <PropsRoute exact path="/animation" component={Animation} />
      <PropsRoute path="/carrera-shaver-521" component={N_521} />
      <PropsRoute path="/carrera-shaver-421" component={N_421} />
      <PropsRoute path="/carrera-trimmer-623" component={N_623} />
      <PropsRoute path="/carrera-toaster-552" component={N_552} />
      <PropsRoute path="/carrera-blender-655" component={N_655} />
      <PropsRoute path="/carrera-hand-mixer-555" component={N_555} />
      <PropsRoute path="/carrera-hair-dryer-531" component={N_531} />
      <PropsRoute path="/carrera-hair-dryer-532" component={N_532} />
      <PropsRoute path="/carrera-stand-mixer-657" component={N_657} />
      <PropsRoute path="/carrera-water-kettle-551" component={N_551} />
      <PropsRoute path="/carrera-curling-tong-537" component={N_537} />
      <PropsRoute path="/carrera-hair-clipper-622" component={N_622} />
      <PropsRoute path="/carrera-charging-base-526" component={N_526} />
      <PropsRoute path="/carrera-ac-hair-dryer-631" component={N_631} />
      <PropsRoute path="/carrera-hot-air-brush-535" component={N_535} />
      <PropsRoute path="/carrera-stick-blender-554" component={N_554} />
      <PropsRoute path="/carrera-cosmetic-trimmer-524" component={N_524} />
      <PropsRoute path="/carrera-hair-straightener-534" component={N_534} />
      <PropsRoute path="/carrera-glass-water-kettle-651" component={N_651} />
      <PropsRoute path="/carrera-facial-cleansing-brush-571" component={N_571} />
      <PropsRoute path="/" component={Home} selectHome={selectHome} />
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
};

export default memo(Routing);
