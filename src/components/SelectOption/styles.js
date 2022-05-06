import { StyleSheet } from "react-native";
import { colors, globalstyles } from "../../styled-components";

export const styles = StyleSheet.create({

    zone_close_modal: {
        ...globalstyles.container_flex,
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
    },

    zone_options_modal: {
        backgroundColor: colors.WHITE_EEEEEE,
        paddingHorizontal: 15,
        paddingVertical: 30,
        borderRadius: 10,
    },

    button_option: {
        // ...globalstyles.border,
        justifyContent: "center",
        height: 60,
    }

});