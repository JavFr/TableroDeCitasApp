import React from 'react';
import { Icon } from 'react-native-elements';
import ActionButton from 'react-native-action-button';

export function ToggleForms(props) {
        return(
            <ActionButton>
                <ActionButton.Item buttonColor='#9b59b6' title="New Author"  onPress={() => props.onPress('AuthorsModal')}>
                    <Icon name="user-plus" type="font-awesome"/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#9b59b6' title="New Book" onPress={() => props.onPress('BooksModal')}>
                    <Icon name="book" type="font-awesome"/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#9b59b6' title="New Quote" onPress={() => props.onPress('QuotesModal')}>
                    <Icon name="quote-right" type="font-awesome"/>
                </ActionButton.Item>
            </ActionButton>
        );
    }






