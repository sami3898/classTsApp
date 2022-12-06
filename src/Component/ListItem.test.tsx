import React from "react";
import {
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react-native";
import ListItem from "./ListItem";
import { FlatList, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const mockObject = {
    id: 1,
    name: "Hero",
    url: "www.google.com",
};

describe("Render List Item Component", () => {
    it(" Sould render Component ", () => {
        const tree = render(<ListItem item={mockObject} index={1} />);
        expect(tree.getByTestId('li-touchable')).toBeDefined();
    });

    it(" should navigate on press ", async () => {
        const navigation = { navigate: () => {} };
        spyOn(navigation, "navigate");

        render(
            <NavigationContainer>
                <ListItem item={mockObject} index={1} navigation={navigation} />
            </NavigationContainer>
        );

        await waitFor(() => {
            fireEvent.press(screen.getByTestId("li-touchable"));
        });

        expect(navigation.navigate).toHaveBeenCalledWith("Details", {
            title: mockObject.name,
            url: mockObject.url,
        });
    });
});
