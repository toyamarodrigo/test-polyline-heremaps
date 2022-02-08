sources:
  omv:
    transform:
      road_shields: |
        function(data, extraData) {
          if (data.roads) {
            const features = data.roads.features;
            let featureIdx = features.length;
            while (featureIdx--) {
              let feature = features[featureIdx],
                  properties = feature.properties;
              if (typeof properties.all_route_types === 'string') {
                const types = properties.all_route_types.split(';'),
                      texts = properties.all_shield_texts.split(';'),
                      networks = properties.all_networks.split(';');
                let idx = types.length;
                while (idx--) {
                  let props = properties;
                  if (idx) {
                    // Prototyping of feature, properties and geometry + deep clone of geometry coordinates:
                    const featureClone = Object.assign({}, feature);
                    props = featureClone.properties = Object.assign({}, props);
                    featureClone.geometry = Object.assign({}, feature.geometry);
                    const coordinatesClone = featureClone.geometry.coordinates = [],
                          coordinates = feature.geometry.coordinates;
                    let i = coordinates.length;
                    while (i--) {
                      const lineString = coordinates[i];
                      let lineStringClone;
                      if (lineString[0].slice) {
                        lineStringClone = [];
                        let j = lineString.length;
                        while(j--) lineStringClone[j] = lineString[j].slice();
                      } else {
                        lineStringClone = lineString.slice();
                      };
                      coordinatesClone[i] = lineStringClone;
                    }
                    features.push(featureClone);
                  }
                  props.route_type = types[idx];
                  props.network = networks[idx];
                  props.shield_text = texts[idx];
                }
              }
            }
          }
          return data;
        }
global:
  shield:
    getChild: |
      function(parentNode, childKey) {
        return parentNode ? (parentNode[childKey] || parentNode['default']) : undefined;
      }
    getStyle: |
      function(road) {
        const styles = this.styles,
              network = (road.network || road.all_networks || '').split(':'),
              origPath = [
                  network[0],
                  network[1],
                  road.route_type || road.all_route_types,
                  // TODO:
                  // The shield text (like "A-21M") must be converted into a pattern (like "A-##M") to match
                  // with the PATTERN column in road_icon_masterlist.xlsm/RoadIcon.Configuration worksheet.
                  // Be aware that a # character means not only digits [0-9] but also arabic digits and others.
                  // See REGEX column in road_icon_masterlist.xlsm/RoadShieldOnSignRepresentation worksheet.
                  road.shield_text || road.all_shield_texts
              ];
        let depth = 3;
        let style;
        let path;
        do {
            if (depth < 3) {
                path = origPath.slice();
                path[depth] = 'default';
            } else {
                path = origPath;
            }
            style = this.getChild(this.getChild(this.getChild(this.getChild(styles, path[0]), path[1]), path[2]), path[3]);
        } while (!style && depth--);
        return style;
      }
    styles:
      default:
        default:
          '1':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_hexagon
          '2':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--blue_rectangle_yellow
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      AF:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      AL:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_hexagon
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '5':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      DZ:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
      AS:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      AO:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      AD:
        default:
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
      AR:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_pentagon
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      AM:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      AW:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      AU:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_pentagon
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--australia_2
          '3':
            default:
              show: true
              fontColor: '#588BC6'
              icon: road_shield--australia_3
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--australia_b
          '5':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--australia_5
          '6':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--australia_a
      AT:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '5':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_oval
      AZ:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
            'AH#':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
            'AH##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      BS:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      BH:
        default:
          '1':
            default:
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
      BD:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      BB:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      BY:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      BE:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      BZ:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      BJ:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      BM:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      BO:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      BA:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
      BW:
        default:
          '1':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
      BR:
        default:
          '1':
            '2':
              show: true
              fontColor: '#323232'
              icon: road_shield--brazil_a
          '2':
            '1':
              show: true
              fontColor: '#323232'
              icon: road_shield--brazil_b
      BN:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      BG:
        default:
          '1':
            '2':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            '1':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '3':
            '3':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            '4':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
      BF:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      BI:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      KH:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      CM:
        default:
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      CA:
        default:
          default:
            default:
              show: true
              fontColor: '#559856'
              icon: road_shield--canada_a
        AB:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_pentagon_round
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_oval
        BC:
          '1':
            default:
              show: true
              fontColor: '#588AC6'
              icon: road_shield--CAN_british_columbia_1
        MB:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--CAN_manitoba_1
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--black_oval
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--CAN_manitoba_3
        NB:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--green_square_white
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--blue_square_white
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_square
        NL:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle_green
        NT:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--CAN_northw_territories_1
        NS:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--CAN_novia_scotia_1
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_shield
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
        'ON':
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--CAN_ontario_1
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--CAN_ontario_2
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--CAN_ontario_3
        PE:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--CAN_prince_edward_isl_1_2
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--CAN_prince_edward_isl_1_2
        QC:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--CAN_quebec_1
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--CAN_quebec_2
        SK:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--CAN_saskatchewan_1
          '2':
            default:
              show: true
              fontColor: '#559856'
              icon: road_shield--CAN_saskatchewan_2
          '3':
            default:
              show: true
              fontColor: '#559856'
              icon: road_shield--CAN_saskatchewan_3
        YT:
          '1':
            default:
              show: true
              fontColor: '#D66867'
              icon: road_shield--white_square_red
      CV:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      KY:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      CF:
        default:
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      TD:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      CL:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_shield
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      CN:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      CX:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      CC:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      CO:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      KM:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      CD:
        default:
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      CG:
        default:
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      CR:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      CI:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      HR:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_hexagon
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      CU:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      CY:
        default:
          '1':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_hexagon
          '2':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--blue_rectangle_yellow
          '3':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--blue_rectangle_yellow
      CZ:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '5':
            default:
              show: false
      DK:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      DJ:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      DO:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      EC:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      EG:
        default:
          '1':
            default:
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_shield
      GQ:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      ER:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      EE:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      ET:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      FK:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      FO:
        default:
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      FJ:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      FI:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '6':
            default:
              show: false
      FR:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
            'T#':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
            'T##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
            'T###':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
            'M#':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
            'M##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
            'M###':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
            'M####':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '6':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
      GF:
        default:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      PF:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      GA:
        default:
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      GM:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      GE:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
      DE:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_hexagon
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
          '4':
            default:
              show: false
          '5':
            default:
              show: false
          '6':
            default:
              show: false
      GH:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      GI:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      GB:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '2':
            'A#':
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
            'A##':
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
            'A###':
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
            'A####':
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      GR:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_hexagon
            '#':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--greece_a
            '##':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--greece_a
            '###':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--greece_a
            '#a':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
            '##a':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
            '###a':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
            '#α':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
            '##α':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
            '###α':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
      GP:
        default:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      GU:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      GT:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_shield
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_shield
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      GN:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      GW:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      GY:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      HT:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      HN:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      HK:
        default:
          '1':
            default:
              show: true
              fontColor: '#588AC6'
              icon: road_shield--hongkong_a
      HU:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_pentagon
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_pentagon
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      IS:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      IN:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--india_a
            'AH#':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--india_b
            'AH##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--india_b
            'NE-#':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
            'NE-##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      ID:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      IR:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      IQ:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
            'م#':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
            'م##':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
            'M#':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
            'M##':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
      IE:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '2':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      IM:
        default:
          '2':
            'A#':
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
            'A##':
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      IL:
        default:
          '1':
            default:
              show: true
              fontColor: '#588BC6'
              icon: road_shield--israel_a
          '2':
            default:
              show: true
              fontColor: '#D66767'
              icon: road_shield--israel_b
          '3':
            default:
              show: true
              fontColor: '#569956'
              icon: road_shield--israel_c
          '4':
            default:
              show: true
              fontColor: '#8B4513'
              icon: road_shield--israel_d
      IT:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_octagon
            'RA#':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
            'RA##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
      JM:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      JP:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--japan_ew_a
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--japan_ue_a
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--japan_nr_a
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--japan_mr_a
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--japan_mr_a
      JO:
        default:
          '1':
            'M#':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
            'M##':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
            'م#':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
            'م##':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
      KZ:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
      KE:
        default:
          '1':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
          '5':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      XK:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_hexagon
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      KP:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      KW:
        default:
          '1':
            default:
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            'ROAD #':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--kuwait_a
            'ROAD ##':
              show: true
              fontColor: '#569956'
              icon: road_shield--kuwait_c
            'ROAD ###':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--kuwait_b
      KG:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      LA:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      LV:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
      LB:
        default:
          '1':
            default:
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
      LS:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      LR:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      LY:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      LI:
        default:
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
      LT:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
      LU:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            'A#':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
            'A##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--luxembourg_c
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
      MO:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      MK:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      MG:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      MW:
        default:
          '1':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: false
      MY:
        default:
          '1':
            'E#':
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_hexagon
            'E##':
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_hexagon
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_hexagon
          '3':
            default:
              show: true
              fontColor: '#CC5252'
              icon: road_shield--orange_hexagon
      MV:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      ML:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      MT:
        default:
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
      MQ:
        default:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      MR:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      MU:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      YT:
        default:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      MX:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--mexico_a
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--mexico_b
      MD:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--romania_b
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_pentagon
      MC:
        default:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
      MN:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      ME:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      MA:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      MZ:
        default:
          '1':
            'EN#':
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
            'EN##':
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      MM:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      NA:
        default:
          '1':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--namibia_a
          '2':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
            'C##':
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--southafrica_b
            'MR##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
      NP:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      NL:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--netherlands_c
      NC:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      NZ:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--newzealand_a
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--newzealand_b
      NI:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      NE:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      NG:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      MP:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      'NO':
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
          '4':
            default:
              show: false
      OM:
        default:
          '1':
            default:
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
          '2':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--blue_rectangle
      PK:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
      PS:
        default:
          '1':
            default:
              show: true
              fontColor: '#588BC6'
              icon: road_shield--israel_a
          '2':
            default:
              show: true
              fontColor: '#D66767'
              icon: road_shield--israel_b
          '3':
            default:
              show: true
              fontColor: '#569956'
              icon: road_shield--israel_c
          '4':
            default:
              show: true
              fontColor: '#8B4513'
              icon: road_shield--israel_d
      PA:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_shield
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      PY:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      PE:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--peru_1
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      PH:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_pentagon
            'E#':
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_pentagon
            E2 AH26:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_pentagon
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_pentagon
      PL:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '5':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
      PT:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
          '5':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      PR:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--puerto_rico_1
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--puerto_rico_2
          '3':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--puerto_rico_3
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_oval
      QA:
        default:
          '1':
            'M##':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
            'م##':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
            default:
              show: true
              fontColor: '#569956'
              icon: road_shield--qatar_b
          '2':
            default:
              show: true
              fontColor: '#569956'
              icon: road_shield--qatar_b
          '3':
            default:
              show: true
              fontColor: '#569956'
              icon: road_shield--qatar_b
      RE:
        default:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      RO:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--romania_b
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--romania_c
          '5':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
      RU:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
      RW:
        default:
          '1':
            default:
              show: true
              fontColor: '#f7ecb0'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#f7ecb0'
              icon: road_shield--green_rectangle
      BL:
        default:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      SH:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      KN:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      VC:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      SM:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      ST:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      SA:
        default:
          '1':
            'M#':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
            'M##':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
            'م#':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
            'م##':
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--saudiarabia_1
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--saudiarabia_2
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--saudiarabia_3
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--saudiarabia_3
      SN:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      SC:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      RS:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
          '5':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
      SL:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      SG:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
      SK:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            'D#':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
            'D##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '5':
            default:
              show: false
      SI:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_hexagon
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
          '5':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
      SO:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      ZA:
        default:
          '1':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--southafrica_a
          '2':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--southafrica_b
          '3':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--southafrica_d
      KR:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--korea_1
          '2':
            default:
              show: true
              fontColor: '#588BC6'
              icon: road_shield--korea_2
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--korea_3
          '4':
            default:
              show: true
              fontColor: '#588BC6'
              icon: road_shield--korea_4
          '5':
            default:
              show: true
              fontColor: '#588BC6'
              icon: road_shield--korea_5
      SS:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      ES:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
            'CV-##':
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
            'A-##X':
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
            'BA-##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
            'SA-##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
            'SG-##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
            'SO-##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
            'LZ-##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
            'FV-#':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
            'P-##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
            'FE-##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
            'CG-#.#':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
            'VG-#.#':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
        AN:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
        AR:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
        AS:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
        IB:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
        CN:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
        CB:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
        CM:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
        CL:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
            'VP-####':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
        CT:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
        VC:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
        PV:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
        EX:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
        GA:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
        RI:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
        MD:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
        MC:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
        NC:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '6':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      LK:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      SD:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      SR:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      SZ:
        default:
          '1':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
          '3':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
      SE:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: false
      CH:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_hexagon
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
      SY:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      TW:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--taiwan_a
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--taiwan_c
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--taiwan_b
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
          '5':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      TZ:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      TH:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--thailand_3
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--thailand_2
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--thailand_1
          '5':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--blue_rectangle_yellow
      TG:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      TT:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      TN:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--red_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
      TR:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--orange_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      UG:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      US:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--usa_a
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_shield
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        AL:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        AK:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        AZ:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        AR:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        CA:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        CO:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        CT:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        DE:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        FL:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        GA:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        HI:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        ID:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        IL:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        IN:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        IA:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        KS:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        KY:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        LA:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        ME:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        MD:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        MA:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        MI:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        MN:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        MS:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        MO:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        MT:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        NE:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        NV:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        NH:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        NJ:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        NM:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        NY:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        NC:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        ND:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        OH:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        OK:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        OR:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        PA:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        RI:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        SC:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        SD:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        TN:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        TX:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        UT:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        VT:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        VA:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        WA:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        DC:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        WV:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        WI:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
        WY:
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      UA:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '3':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '5':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
      AE:
        default:
          '1':
            'E##':
              show: true
              fontColor: '#FECE94'
              icon: road_shield--u_a_emirates_1
            'E###':
              show: true
              fontColor: '#FECE94'
              icon: road_shield--u_a_emirates_1
            'إ##':
              show: true
              fontColor: '#FECE94'
              icon: road_shield--u_a_emirates_1
            'إ###':
              show: true
              fontColor: '#FECE94'
              icon: road_shield--u_a_emirates_1
            default:
              show: true
              fontColor: '#588BC6'
              icon: road_shield--white_shield_m
          '2':
            'ش###':
              show: true
              fontColor: '#FECE94'
              icon: road_shield--u_a_emirates_2b
            'S###':
              show: true
              fontColor: '#FECE94'
              icon: road_shield--u_a_emirates_2b
            'SH##':
              show: true
              fontColor: '#FECE94'
              icon: road_shield--u_a_emirates_2b
            'AJ###':
              show: true
              fontColor: '#323232'
              icon: road_shield--u_a_emirates_2c
            '###ع':
              show: true
              fontColor: '#323232'
              icon: road_shield--u_a_emirates_2c
            'ف##':
              show: true
              fontColor: '#323232'
              icon: road_shield--u_a_emirates_2c
            'F##':
              show: true
              fontColor: '#323232'
              icon: road_shield--u_a_emirates_2c
            default:
              show: true
              fontColor: '#FECE94'
              icon: road_shield--u_a_emirates_2a
      UY:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_pentagon
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      VI:
        default:
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--us_virgin_islands
      UZ:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
            'E##':
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      VA:
        default:
          '4':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
      VE:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--venezuela_1
          '2':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--venezuela_2
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--white_rectangle
      VN:
        default:
          '1':
            default:
              show: true
              fontColor: '#FFFFFF'
              icon: road_shield--blue_rectangle
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--yellow_rectangle
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '4':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '5':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      YE:
        default:
          default:
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      ZM:
        default:
          '1':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
          '3':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
      ZW:
        default:
          '1':
            default:
              show: true
              fontColor: '#F7ECB0'
              icon: road_shield--green_rectangle
          '2':
            default:
              show: true
              fontColor: '#323232'
              icon: road_shield--generic
textures:
  road_icons:
    url: ./icons/road_icons-2x.png
    density: 2
    sprites:
      road_shield--CAN_british_columbia_1:
        - 816
        - 170
        - 28
        - 48
      road_shield--CAN_british_columbia_1_1.5:
        - 816
        - 222
        - 42
        - 48
      road_shield--CAN_british_columbia_1_2:
        - 694
        - 302
        - 56
        - 48
      road_shield--CAN_manitoba_1:
        - 648
        - 514
        - 28
        - 44
      road_shield--CAN_manitoba_1_1.5:
        - 2
        - 812
        - 42
        - 44
      road_shield--CAN_manitoba_1_2:
        - 694
        - 354
        - 56
        - 44
      road_shield--CAN_manitoba_3:
        - 910
        - 240
        - 40
        - 36
      road_shield--CAN_manitoba_3_1.5:
        - 244
        - 266
        - 60
        - 36
      road_shield--CAN_manitoba_3_2:
        - 2
        - 190
        - 80
        - 36
      road_shield--CAN_northw_territories_1:
        - 758
        - 698
        - 32
        - 52
      road_shield--CAN_northw_territories_1_1.5:
        - 2
        - 756
        - 48
        - 52
      road_shield--CAN_northw_territories_1_2:
        - 546
        - 222
        - 64
        - 52
      road_shield--CAN_novia_scotia_1:
        - 616
        - 2
        - 28
        - 60
      road_shield--CAN_novia_scotia_1_1.5:
        - 648
        - 2
        - 42
        - 60
      road_shield--CAN_novia_scotia_1_2:
        - 2
        - 600
        - 56
        - 60
      road_shield--CAN_ontario_1:
        - 816
        - 274
        - 28
        - 48
      road_shield--CAN_ontario_1_1.5:
        - 816
        - 326
        - 42
        - 48
      road_shield--CAN_ontario_1_2:
        - 694
        - 402
        - 56
        - 48
      road_shield--CAN_ontario_2:
        - 616
        - 66
        - 28
        - 44
      road_shield--CAN_ontario_2_1.5:
        - 48
        - 812
        - 42
        - 44
      road_shield--CAN_ontario_2_2:
        - 694
        - 454
        - 56
        - 44
      road_shield--CAN_ontario_3:
        - 616
        - 114
        - 28
        - 44
      road_shield--CAN_ontario_3_1.5:
        - 94
        - 812
        - 42
        - 44
      road_shield--CAN_ontario_3_2:
        - 694
        - 502
        - 56
        - 44
      road_shield--CAN_prince_edward_isl_1_2:
        - 816
        - 378
        - 28
        - 48
      road_shield--CAN_prince_edward_isl_1_2_1.5:
        - 816
        - 430
        - 42
        - 48
      road_shield--CAN_prince_edward_isl_1_2_2:
        - 694
        - 550
        - 56
        - 48
      road_shield--CAN_quebec_1:
        - 616
        - 162
        - 28
        - 44
      road_shield--CAN_quebec_1_1.5:
        - 140
        - 812
        - 42
        - 44
      road_shield--CAN_quebec_1_2:
        - 694
        - 602
        - 56
        - 44
      road_shield--CAN_quebec_2:
        - 816
        - 482
        - 24
        - 48
      road_shield--CAN_quebec_2_1.5:
        - 816
        - 534
        - 36
        - 48
      road_shield--CAN_quebec_2_2:
        - 816
        - 586
        - 48
        - 48
      road_shield--CAN_saskatchewan_1:
        - 910
        - 602
        - 28
        - 36
      road_shield--CAN_saskatchewan_1_1.5:
        - 50
        - 860
        - 42
        - 36
      road_shield--CAN_saskatchewan_1_2:
        - 198
        - 544
        - 56
        - 36
      road_shield--CAN_saskatchewan_2:
        - 648
        - 66
        - 28
        - 60
      road_shield--CAN_saskatchewan_2_1.5:
        - 648
        - 130
        - 42
        - 60
      road_shield--CAN_saskatchewan_2_2:
        - 62
        - 600
        - 56
        - 60
      road_shield--CAN_saskatchewan_3:
        - 910
        - 280
        - 28
        - 40
      road_shield--CAN_saskatchewan_3_1.5:
        - 2
        - 904
        - 42
        - 40
      road_shield--CAN_saskatchewan_3_2:
        - 186
        - 600
        - 56
        - 40
      road_shield--australia_2:
        - 910
        - 642
        - 36
        - 36
      road_shield--australia_2_1.5:
        - 246
        - 600
        - 54
        - 36
      road_shield--australia_2_2:
        - 168
        - 266
        - 72
        - 36
      road_shield--australia_3:
        - 910
        - 682
        - 36
        - 36
      road_shield--australia_3_1.5:
        - 304
        - 600
        - 54
        - 36
      road_shield--australia_3_2:
        - 164
        - 308
        - 72
        - 36
      road_shield--australia_5:
        - 910
        - 722
        - 36
        - 32
      road_shield--australia_5_1.5:
        - 362
        - 600
        - 54
        - 32
      road_shield--australia_5_2:
        - 168
        - 230
        - 72
        - 32
      road_shield--australia_a:
        - 910
        - 758
        - 36
        - 24
      road_shield--australia_a_1.5:
        - 306
        - 372
        - 54
        - 24
      road_shield--australia_a_2:
        - 310
        - 276
        - 72
        - 24
      road_shield--australia_b:
        - 374
        - 860
        - 32
        - 32
      road_shield--australia_b_1.5:
        - 816
        - 638
        - 48
        - 32
      road_shield--australia_b_2:
        - 546
        - 278
        - 64
        - 32
      road_shield--black_oval:
        - 186
        - 812
        - 44
        - 36
      road_shield--black_oval_1.5:
        - 78
        - 488
        - 66
        - 36
      road_shield--black_oval_2:
        - 2
        - 114
        - 88
        - 36
      road_shield--blue_hexagon:
        - 530
        - 756
        - 44
        - 32
      road_shield--blue_hexagon_1.5:
        - 454
        - 440
        - 66
        - 32
      road_shield--blue_hexagon_2:
        - 102
        - 78
        - 88
        - 32
      road_shield--blue_pentagon:
        - 910
        - 786
        - 36
        - 32
      road_shield--blue_pentagon_1.5:
        - 420
        - 600
        - 54
        - 32
      road_shield--blue_pentagon_2:
        - 240
        - 308
        - 72
        - 32
      road_shield--blue_rectangle:
        - 910
        - 822
        - 36
        - 24
      road_shield--blue_rectangle_1.5:
        - 364
        - 372
        - 54
        - 24
      road_shield--blue_rectangle_2:
        - 316
        - 308
        - 72
        - 24
      road_shield--blue_rectangle_yellow:
        - 910
        - 850
        - 36
        - 24
      road_shield--blue_rectangle_yellow_1.5:
        - 438
        - 544
        - 54
        - 24
      road_shield--blue_rectangle_yellow_2:
        - 394
        - 2
        - 72
        - 24
      road_shield--blue_shield:
        - 868
        - 50
        - 36
        - 36
      road_shield--blue_shield_1.5:
        - 122
        - 664
        - 54
        - 36
      road_shield--blue_shield_2:
        - 394
        - 30
        - 72
        - 36
      road_shield--blue_square:
        - 616
        - 318
        - 28
        - 28
      road_shield--blue_square_1.5:
        - 648
        - 562
        - 42
        - 28
      road_shield--blue_square_2:
        - 382
        - 400
        - 56
        - 28
      road_shield--blue_square_white:
        - 616
        - 350
        - 28
        - 28
      road_shield--blue_square_white_1.5:
        - 392
        - 716
        - 42
        - 28
      road_shield--blue_square_white_2:
        - 484
        - 488
        - 56
        - 28
      road_shield--brazil_a:
        - 868
        - 90
        - 36
        - 32
      road_shield--brazil_a_1.5:
        - 478
        - 600
        - 54
        - 32
      road_shield--brazil_a_2:
        - 394
        - 70
        - 72
        - 32
      road_shield--brazil_b:
        - 54
        - 756
        - 52
        - 36
      road_shield--brazil_b_1.5:
        - 86
        - 266
        - 78
        - 36
      road_shield--brazil_b_2:
        - 2
        - 2
        - 104
        - 36
      road_shield--canada_a:
        - 868
        - 2
        - 38
        - 44
      road_shield--canada_a_1.5:
        - 694
        - 254
        - 58
        - 44
      road_shield--canada_a_2:
        - 84
        - 308
        - 76
        - 44
      road_shield--generic:
        - 868
        - 126
        - 36
        - 24
      road_shield--generic_1.5:
        - 496
        - 544
        - 54
        - 24
      road_shield--generic_2:
        - 394
        - 106
        - 72
        - 24
      road_shield--greece_a:
        - 410
        - 860
        - 32
        - 32
      road_shield--greece_a_1.5:
        - 816
        - 674
        - 48
        - 32
      road_shield--greece_a_2:
        - 546
        - 314
        - 64
        - 32
      road_shield--green_hexagon:
        - 578
        - 756
        - 44
        - 32
      road_shield--green_hexagon_1.5:
        - 148
        - 488
        - 66
        - 32
      road_shield--green_hexagon_2:
        - 94
        - 114
        - 88
        - 32
      road_shield--green_octagon:
        - 868
        - 154
        - 36
        - 32
      road_shield--green_octagon_1.5:
        - 536
        - 600
        - 54
        - 32
      road_shield--green_octagon_2:
        - 394
        - 134
        - 72
        - 32
      road_shield--green_pentagon:
        - 868
        - 190
        - 36
        - 32
      road_shield--green_pentagon_1.5:
        - 594
        - 600
        - 54
        - 32
      road_shield--green_pentagon_2:
        - 394
        - 170
        - 72
        - 32
      road_shield--green_rectangle:
        - 868
        - 226
        - 36
        - 24
      road_shield--green_rectangle_1.5:
        - 554
        - 544
        - 54
        - 24
      road_shield--green_rectangle_2:
        - 394
        - 206
        - 72
        - 24
      road_shield--green_square_white:
        - 616
        - 382
        - 28
        - 28
      road_shield--green_square_white_1.5:
        - 438
        - 716
        - 42
        - 28
      road_shield--green_square_white_2:
        - 258
        - 544
        - 56
        - 28
      road_shield--hongkong_a:
        - 616
        - 210
        - 24
        - 32
      road_shield--hongkong_a_1.5:
        - 868
        - 254
        - 36
        - 32
      road_shield--hongkong_a_2:
        - 816
        - 710
        - 48
        - 32
      road_shield--india_a:
        - 816
        - 746
        - 28
        - 48
      road_shield--india_a_1.5:
        - 648
        - 306
        - 42
        - 48
      road_shield--india_a_2:
        - 2
        - 664
        - 56
        - 48
      road_shield--india_b:
        - 648
        - 358
        - 28
        - 48
      road_shield--india_b_1.5:
        - 648
        - 410
        - 42
        - 48
      road_shield--india_b_2:
        - 62
        - 664
        - 56
        - 48
      road_shield--israel_a:
        - 910
        - 324
        - 40
        - 32
      road_shield--israel_a_1.5:
        - 244
        - 230
        - 60
        - 32
      road_shield--israel_a_2:
        - 86
        - 190
        - 80
        - 32
      road_shield--israel_b:
        - 910
        - 360
        - 40
        - 32
      road_shield--israel_b_1.5:
        - 356
        - 488
        - 60
        - 32
      road_shield--israel_b_2:
        - 170
        - 190
        - 80
        - 32
      road_shield--israel_c:
        - 626
        - 756
        - 44
        - 32
      road_shield--israel_c_1.5:
        - 218
        - 488
        - 66
        - 32
      road_shield--israel_c_2:
        - 2
        - 154
        - 88
        - 32
      road_shield--israel_d:
        - 254
        - 190
        - 52
        - 32
      road_shield--israel_d_1.5:
        - 86
        - 230
        - 78
        - 32
      road_shield--israel_d_2:
        - 2
        - 42
        - 104
        - 32
      road_shield--japan_ew_a:
        - 910
        - 396
        - 40
        - 32
      road_shield--japan_ew_a_1.5:
        - 420
        - 488
        - 60
        - 32
      road_shield--japan_ew_a_2:
        - 2
        - 230
        - 80
        - 32
      road_shield--japan_mr_a:
        - 2
        - 860
        - 44
        - 40
      road_shield--japan_mr_a_1.5:
        - 546
        - 2
        - 66
        - 40
      road_shield--japan_mr_a_2:
        - 218
        - 2
        - 88
        - 40
      road_shield--japan_nr_a:
        - 910
        - 432
        - 40
        - 38
      road_shield--japan_nr_a_1.5:
        - 70
        - 544
        - 60
        - 38
      road_shield--japan_nr_a_2:
        - 2
        - 266
        - 80
        - 38
      road_shield--japan_ue_a:
        - 910
        - 194
        - 40
        - 42
      road_shield--japan_ue_a_1.5:
        - 122
        - 600
        - 60
        - 42
      road_shield--japan_ue_a_2:
        - 310
        - 2
        - 80
        - 42
      road_shield--korea_1:
        - 868
        - 290
        - 36
        - 36
      road_shield--korea_1_1.5:
        - 180
        - 664
        - 54
        - 36
      road_shield--korea_1_2:
        - 394
        - 234
        - 72
        - 36
      road_shield--korea_2:
        - 674
        - 756
        - 44
        - 32
      road_shield--korea_2_1.5:
        - 546
        - 46
        - 66
        - 32
      road_shield--korea_2_2:
        - 218
        - 46
        - 88
        - 32
      road_shield--korea_3:
        - 868
        - 330
        - 36
        - 24
      road_shield--korea_3_1.5:
        - 238
        - 664
        - 54
        - 24
      road_shield--korea_3_2:
        - 394
        - 274
        - 72
        - 24
      road_shield--korea_4:
        - 868
        - 358
        - 36
        - 24
      road_shield--korea_4_1.5:
        - 296
        - 664
        - 54
        - 24
      road_shield--korea_4_2:
        - 394
        - 302
        - 72
        - 24
      road_shield--korea_5:
        - 722
        - 756
        - 44
        - 32
      road_shield--korea_5_1.5:
        - 546
        - 82
        - 66
        - 32
      road_shield--korea_5_2:
        - 218
        - 82
        - 88
        - 32
      road_shield--kuwait_a:
        - 616
        - 538
        - 24
        - 24
      road_shield--kuwait_a_1.5:
        - 868
        - 386
        - 36
        - 24
      road_shield--kuwait_a_2:
        - 586
        - 664
        - 48
        - 24
      road_shield--kuwait_b:
        - 868
        - 414
        - 36
        - 24
      road_shield--kuwait_b_1.5:
        - 354
        - 664
        - 54
        - 24
      road_shield--kuwait_b_2:
        - 394
        - 330
        - 72
        - 24
      road_shield--kuwait_c:
        - 616
        - 566
        - 24
        - 24
      road_shield--kuwait_c_1.5:
        - 868
        - 442
        - 36
        - 24
      road_shield--kuwait_c_2:
        - 638
        - 664
        - 48
        - 24
      road_shield--luxembourg_c:
        - 868
        - 470
        - 36
        - 24
      road_shield--luxembourg_c_1.5:
        - 412
        - 664
        - 54
        - 24
      road_shield--luxembourg_c_2:
        - 2
        - 372
        - 72
        - 24
      road_shield--mexico_a:
        - 868
        - 498
        - 36
        - 36
      road_shield--mexico_a_1.5:
        - 2
        - 716
        - 54
        - 36
      road_shield--mexico_a_2:
        - 2
        - 400
        - 72
        - 36
      road_shield--mexico_b:
        - 616
        - 414
        - 24
        - 28
      road_shield--mexico_b_1.5:
        - 868
        - 538
        - 36
        - 28
      road_shield--mexico_b_2:
        - 292
        - 716
        - 48
        - 28
      road_shield--namibia_a:
        - 868
        - 570
        - 36
        - 36
      road_shield--namibia_a_1.5:
        - 60
        - 716
        - 54
        - 36
      road_shield--namibia_a_2:
        - 78
        - 400
        - 72
        - 36
      road_shield--netherlands_c:
        - 166
        - 756
        - 48
        - 32
      road_shield--netherlands_c_1.5:
        - 154
        - 400
        - 72
        - 32
      road_shield--netherlands_c_2:
        - 2
        - 78
        - 96
        - 32
      road_shield--newzealand_a:
        - 868
        - 610
        - 36
        - 36
      road_shield--newzealand_a_1.5:
        - 118
        - 716
        - 54
        - 36
      road_shield--newzealand_a_2:
        - 470
        - 2
        - 72
        - 36
      road_shield--newzealand_b:
        - 446
        - 860
        - 32
        - 32
      road_shield--newzealand_b_1.5:
        - 218
        - 756
        - 48
        - 32
      road_shield--newzealand_b_2:
        - 546
        - 350
        - 64
        - 32
      road_shield--orange_hexagon:
        - 234
        - 812
        - 44
        - 32
      road_shield--orange_hexagon_1.5:
        - 546
        - 118
        - 66
        - 32
      road_shield--orange_hexagon_2:
        - 218
        - 118
        - 88
        - 32
      road_shield--orange_rectangle:
        - 868
        - 650
        - 36
        - 24
      road_shield--orange_rectangle_1.5:
        - 470
        - 664
        - 54
        - 24
      road_shield--orange_rectangle_2:
        - 470
        - 42
        - 72
        - 24
      road_shield--peru_1:
        - 868
        - 678
        - 36
        - 36
      road_shield--peru_1_1.5:
        - 176
        - 716
        - 54
        - 36
      road_shield--peru_1_2:
        - 470
        - 70
        - 72
        - 36
      road_shield--puerto_rico_1:
        - 616
        - 246
        - 24
        - 32
      road_shield--puerto_rico_1_1.5:
        - 868
        - 718
        - 36
        - 32
      road_shield--puerto_rico_1_2:
        - 270
        - 756
        - 48
        - 32
      road_shield--puerto_rico_2:
        - 616
        - 282
        - 24
        - 32
      road_shield--puerto_rico_2_1.5:
        - 868
        - 754
        - 36
        - 32
      road_shield--puerto_rico_2_2:
        - 322
        - 756
        - 48
        - 32
      road_shield--puerto_rico_3:
        - 910
        - 474
        - 40
        - 36
      road_shield--puerto_rico_3_1.5:
        - 134
        - 544
        - 60
        - 36
      road_shield--puerto_rico_3_2:
        - 310
        - 48
        - 80
        - 36
      road_shield--qatar_b:
        - 616
        - 446
        - 28
        - 24
      road_shield--qatar_b_1.5:
        - 422
        - 372
        - 42
        - 24
      road_shield--qatar_b_2:
        - 546
        - 514
        - 56
        - 24
      road_shield--red_hexagon:
        - 282
        - 812
        - 44
        - 32
      road_shield--red_hexagon_1.5:
        - 546
        - 154
        - 66
        - 32
      road_shield--red_hexagon_2:
        - 218
        - 154
        - 88
        - 32
      road_shield--red_rectangle:
        - 868
        - 790
        - 36
        - 24
      road_shield--red_rectangle_1.5:
        - 528
        - 664
        - 54
        - 24
      road_shield--red_rectangle_2:
        - 470
        - 110
        - 72
        - 24
      road_shield--romania_b:
        - 868
        - 818
        - 36
        - 28
      road_shield--romania_b_1.5:
        - 234
        - 716
        - 54
        - 28
      road_shield--romania_b_2:
        - 470
        - 138
        - 72
        - 28
      road_shield--romania_c:
        - 652
        - 600
        - 36
        - 32
      road_shield--romania_c_1.5:
        - 758
        - 2
        - 54
        - 32
      road_shield--romania_c_2:
        - 470
        - 170
        - 72
        - 32
      road_shield--saudiarabia_1:
        - 482
        - 860
        - 32
        - 32
      road_shield--saudiarabia_1_1.5:
        - 374
        - 756
        - 48
        - 32
      road_shield--saudiarabia_1_2:
        - 546
        - 386
        - 64
        - 32
      road_shield--saudiarabia_2:
        - 910
        - 2
        - 40
        - 44
      road_shield--saudiarabia_2_1.5:
        - 694
        - 2
        - 60
        - 44
      road_shield--saudiarabia_2_2:
        - 310
        - 88
        - 80
        - 44
      road_shield--saudiarabia_3:
        - 96
        - 860
        - 36
        - 36
      road_shield--saudiarabia_3_1.5:
        - 758
        - 38
        - 54
        - 36
      road_shield--saudiarabia_3_2:
        - 470
        - 206
        - 72
        - 36
      road_shield--southafrica_a:
        - 136
        - 860
        - 36
        - 36
      road_shield--southafrica_a_1.5:
        - 758
        - 78
        - 54
        - 36
      road_shield--southafrica_a_2:
        - 470
        - 246
        - 72
        - 36
      road_shield--southafrica_b:
        - 910
        - 514
        - 40
        - 40
      road_shield--southafrica_b_1.5:
        - 694
        - 50
        - 60
        - 40
      road_shield--southafrica_b_2:
        - 310
        - 136
        - 80
        - 40
      road_shield--southafrica_d:
        - 770
        - 756
        - 36
        - 32
      road_shield--southafrica_d_1.5:
        - 758
        - 118
        - 54
        - 32
      road_shield--southafrica_d_2:
        - 470
        - 286
        - 72
        - 32
      road_shield--taiwan_a:
        - 518
        - 860
        - 32
        - 32
      road_shield--taiwan_a_1.5:
        - 426
        - 756
        - 48
        - 32
      road_shield--taiwan_a_2:
        - 546
        - 422
        - 64
        - 32
      road_shield--taiwan_b:
        - 176
        - 860
        - 36
        - 36
      road_shield--taiwan_b_1.5:
        - 758
        - 154
        - 54
        - 36
      road_shield--taiwan_b_2:
        - 470
        - 322
        - 72
        - 36
      road_shield--taiwan_c:
        - 216
        - 860
        - 36
        - 36
      road_shield--taiwan_c_1.5:
        - 758
        - 194
        - 54
        - 36
      road_shield--taiwan_c_2:
        - 470
        - 362
        - 72
        - 36
      road_shield--thailand_1:
        - 910
        - 50
        - 36
        - 44
      road_shield--thailand_1_1.5:
        - 758
        - 234
        - 54
        - 44
      road_shield--thailand_1_2:
        - 2
        - 440
        - 72
        - 44
      road_shield--thailand_2:
        - 910
        - 98
        - 36
        - 44
      road_shield--thailand_2_1.5:
        - 758
        - 282
        - 54
        - 44
      road_shield--thailand_2_2:
        - 78
        - 440
        - 72
        - 44
      road_shield--thailand_3:
        - 910
        - 146
        - 36
        - 44
      road_shield--thailand_3_1.5:
        - 758
        - 330
        - 54
        - 44
      road_shield--thailand_3_2:
        - 154
        - 440
        - 72
        - 44
      road_shield--u_a_emirates_1:
        - 648
        - 194
        - 36
        - 52
      road_shield--u_a_emirates_1_1.5:
        - 758
        - 378
        - 54
        - 52
      road_shield--u_a_emirates_1_2:
        - 2
        - 488
        - 72
        - 52
      road_shield--u_a_emirates_2a:
        - 648
        - 250
        - 32
        - 52
      road_shield--u_a_emirates_2a_1.5:
        - 816
        - 2
        - 48
        - 52
      road_shield--u_a_emirates_2a_2:
        - 546
        - 458
        - 64
        - 52
      road_shield--u_a_emirates_2b:
        - 694
        - 94
        - 52
        - 60
      road_shield--u_a_emirates_2b_1.5:
        - 2
        - 308
        - 78
        - 60
      road_shield--u_a_emirates_2b_2:
        - 110
        - 2
        - 104
        - 60
      road_shield--u_a_emirates_2c:
        - 816
        - 58
        - 32
        - 52
      road_shield--u_a_emirates_2c_1.5:
        - 816
        - 114
        - 48
        - 52
      road_shield--u_a_emirates_2c_2:
        - 2
        - 544
        - 64
        - 52
      road_shield--us_virgin_islands:
        - 554
        - 860
        - 32
        - 32
      road_shield--us_virgin_islands_1.5:
        - 478
        - 756
        - 48
        - 32
      road_shield--us_virgin_islands_2:
        - 288
        - 488
        - 64
        - 32
      road_shield--usa_a:
        - 256
        - 860
        - 36
        - 36
      road_shield--usa_a_1.5:
        - 758
        - 434
        - 54
        - 36
      road_shield--usa_a_2:
        - 230
        - 440
        - 72
        - 36
      road_shield--venezuela_1:
        - 910
        - 558
        - 40
        - 40
      road_shield--venezuela_1_1.5:
        - 694
        - 158
        - 60
        - 40
      road_shield--venezuela_1_2:
        - 310
        - 180
        - 80
        - 40
      road_shield--venezuela_2:
        - 336
        - 860
        - 34
        - 32
      road_shield--venezuela_2_1.5:
        - 110
        - 756
        - 52
        - 32
      road_shield--venezuela_2_2:
        - 382
        - 440
        - 68
        - 32
      road_shield--white_oval:
        - 344
        - 716
        - 44
        - 28
      road_shield--white_oval_1.5:
        - 546
        - 190
        - 66
        - 28
      road_shield--white_oval_2:
        - 94
        - 154
        - 88
        - 28
      road_shield--white_pentagon:
        - 330
        - 812
        - 36
        - 32
      road_shield--white_pentagon_1.5:
        - 758
        - 474
        - 54
        - 32
      road_shield--white_pentagon_2:
        - 470
        - 402
        - 72
        - 32
      road_shield--white_pentagon_round:
        - 370
        - 812
        - 36
        - 32
      road_shield--white_pentagon_round_1.5:
        - 758
        - 510
        - 54
        - 32
      road_shield--white_pentagon_round_2:
        - 230
        - 400
        - 72
        - 32
      road_shield--white_rectangle:
        - 690
        - 664
        - 36
        - 24
      road_shield--white_rectangle_1.5:
        - 758
        - 546
        - 54
        - 24
      road_shield--white_rectangle_2:
        - 78
        - 372
        - 72
        - 24
      road_shield--white_rectangle_green:
        - 576
        - 716
        - 36
        - 24
      road_shield--white_rectangle_green_1.5:
        - 758
        - 574
        - 54
        - 24
      road_shield--white_rectangle_green_2:
        - 154
        - 372
        - 72
        - 24
      road_shield--white_shield:
        - 410
        - 812
        - 36
        - 28
      road_shield--white_shield_1.5:
        - 758
        - 602
        - 54
        - 28
      road_shield--white_shield_2:
        - 306
        - 400
        - 72
        - 28
      road_shield--white_shield_m:
        - 648
        - 462
        - 40
        - 48
      road_shield--white_shield_m_1.5:
        - 694
        - 202
        - 60
        - 48
      road_shield--white_shield_m_2:
        - 310
        - 224
        - 80
        - 48
      road_shield--white_square:
        - 616
        - 474
        - 28
        - 28
      road_shield--white_square_1.5:
        - 484
        - 716
        - 42
        - 28
      road_shield--white_square_2:
        - 318
        - 544
        - 56
        - 28
      road_shield--white_square_red:
        - 616
        - 506
        - 28
        - 28
      road_shield--white_square_red_1.5:
        - 530
        - 716
        - 42
        - 28
      road_shield--white_square_red_2:
        - 378
        - 544
        - 56
        - 28
      road_shield--yellow_pentagon:
        - 296
        - 860
        - 36
        - 32
      road_shield--yellow_pentagon_1.5:
        - 758
        - 634
        - 54
        - 32
      road_shield--yellow_pentagon_2:
        - 306
        - 440
        - 72
        - 32
      road_shield--yellow_rectangle:
        - 616
        - 716
        - 36
        - 24
      road_shield--yellow_rectangle_1.5:
        - 758
        - 670
        - 54
        - 24
      road_shield--yellow_rectangle_2:
        - 230
        - 372
        - 72
        - 24
styles:
  shields:
    base: points
    blend_order: 1
    draw:
      visible: global.shields_visible
      texture: road_icons
      sprite: |
        function() {
          // TODO: As a Hot-Fix for OLPRPS-7447 we fall back to the ref property:
          const text = feature.shield_text || feature.all_shield_texts || feature.ref;
          if (text) {
            const size = text.length;
            return global.shield.getStyle(feature).icon + (size < 3 ? '' : size < 5 ? '_1.5' : '_2');
          }
        }
      size: global.shield.size
      repeat_group: shields
      repeat_distance: global.shield.repeat_distance
      placement: midpoint
      placement_min_length_ratio: 0.1
      text:
        anchor: center
        text_source: |
          function() {
            // TODO: As a Hot-Fix for OLPRPS-7447 we fall back to the ref property:
            return feature.shield_text || feature.all_shield_texts || feature.ref;
          }
        font:
          fill: 'function() {return global.shield.getStyle(feature).fontColor;}'
          family: global.text_font_family
          weight: global.shield.text.font.weight
          size: global.shield.text.font.size
layers:
  roads:
    shields:
      filter:
        all:
          - kind:
              - highway
              - major_road
              - minor_road
          - global.feature_min_zoom_filter
          - 'function() {return global.shield.getStyle(feature).show;}'
      draw:
        shields:
          visible: global.shields_visible
      highway:
        filter:
          kind: highway
        draw:
          shields:
            priority: global.label.priorities.road-shield0-labels
        trunk:
          filter:
            kind_detail: trunk
          draw:
            shields:
              priority: global.label.priorities.road-shield1-labels
      major_road:
        filter:
          kind: major_road
        draw:
          shields:
            priority: global.label.priorities.road-shield2-labels
        primary:
          filter:
            kind_detail: primary
          draw:
            shields:
              priority: global.label.priorities.road-shield1-labels
        tertiary:
          filter:
            kind_detail: tertiary
          draw:
            shields:
              priority: global.label.priorities.road-shield3-labels
      minor_road:
        filter:
          kind: minor_road
        draw:
          shields:
            priority: global.label.priorities.road-shield4-labels
