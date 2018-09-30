import React from 'react';
import { Animated,Easing, ScrollView, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  constructor(props) {
    super(props);
    this.state = {
        fadeOut: new Animated.Value(1),
        leftPostion: new Animated.Value(1000)
    };
  }
  componentDidMount() {
    Animated.sequence(
        [
            Animated.timing(this.state.leftPostion, {
                toValue: 0,
                duration: 5000,
                easing: Easing.out(Easing.back())
            }).start()
        ],
        [
            Animated.timing(this.state.fadeOut, {
                toValue: 0,
                duration: 6000
            }).start()
        ]
    );
}

  render() {

    return (
      <ScrollView>
          <Text
          style = {
            {
            fontSize: 25,
            color: "blue"
            }
          }
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum, lacus at ornare ornare, erat lorem egestas purus, et condimentum quam arcu vel arcu. Curabitur ornare hendrerit consectetur. Pellentesque tincidunt tellus eu sapien cursus volutpat. Integer tempor dictum pharetra. Integer mollis eros vitae pretium pretium. Ut ultrices pretium rutrum. Donec suscipit aliquam dui a condimentum. Integer nec mauris libero. Cras mauris nulla, maximus nec elementum nec, aliquam in dolor. Suspendisse tempus nibh tortor, ac auctor nisl mattis eget. Duis luctus turpis eget felis finibus, et pharetra turpis suscipit. Aenean vitae elementum elit. Phasellus condimentum convallis lorem, at egestas sapien consequat eget. In hac habitasse platea dictumst. Suspendisse a vestibulum erat. Praesent venenatis lacus eget lacus euismod, quis sodales ante tempus.

Nullam ac tortor ut purus viverra sagittis in vitae sapien. Aenean ultricies sagittis nunc ut sodales. Fusce vel metus sed neque accumsan sagittis. Nullam cursus elit semper mauris cursus tempor. Duis volutpat elit eget volutpat facilisis. Sed quis auctor sem. Quisque aliquet nulla at tempor consequat. Sed ullamcorper tellus quam. Aliquam erat volutpat. Nam velit dui, bibendum at pharetra sed, pretium ac sem. Etiam lacinia nibh id libero vehicula, eu molestie massa condimentum. Nulla facilisi. Proin in dui porttitor, placerat orci eu, dictum erat.

In non elit eget leo suscipit mattis. Ut quis hendrerit lectus. Vivamus a facilisis orci, ut pretium magna. Cras tellus eros, vestibulum in nibh ut, posuere faucibus orci. Phasellus vestibulum elementum dolor sit amet consequat. Mauris massa nisl, suscipit a massa ut, bibendum finibus sem. Nullam vel ipsum semper, sagittis felis posuere, tempus leo. Phasellus nulla ex, maximus ac urna non, faucibus volutpat diam.
        </Text>
      </ScrollView>
    );
  }
}
