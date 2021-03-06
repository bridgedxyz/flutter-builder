import { Gradient, AlignmentGeometry } from ".";
import { double } from "../dart";
import { Color, TileMode } from "../dart-ui";
import { GradientTransform } from "./gradient-transform";

/**
 * https://api.flutter.dev/flutter/painting/RadialGradient-class.html
 */
export class RadialGradient extends Gradient {
    center?: AlignmentGeometry
    radius?: double
    colors: Array<Color>
    stops: Array<double>
    tileMode?: TileMode
    focal?: AlignmentGeometry
    focalRadius?: double
    transform?: GradientTransform

    constructor(args: {
        center?: AlignmentGeometry
        radius?: double
        colors: Array<Color>
        stops: Array<double>
        tileMode?: TileMode
        focal?: AlignmentGeometry
        focalRadius?: double
        transform?: GradientTransform
    }) {
        super()
        this.center = args.center
        this.radius = args.radius
        this.colors = args.colors
        this.stops = args.stops
        this.tileMode = args.tileMode
        this.focal = args.focal
        this.focalRadius = args.focalRadius
        this.transform = args.transform
    }
}