/* -*- js-indent-level: 8 -*- */
/*
 * Copyright the Collabora Online contributors.
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/*
 * Definitions.Types - types and interfaces for JSDialog
 */

// common for all widgets
interface WidgetJSON {
	id: string; // unique id of a widget
	type: string; // type of widget
	enabled: boolean | undefined; // enabled state
	visible: boolean | undefined; // visibility state
	children: Array<WidgetJSON> | undefined; // child nodes
	title?: string;
}

// JSDialog message (full, update or action)
interface JSDialogJSON extends WidgetJSON {
	id: string; // unique windowId
	jsontype: string; // specifies target componenet, on root level only
	action: string | undefined; // optional name of an action
	control?: WidgetJSON;
}

// JSDialog message for popup
interface PopupData extends JSDialogJSON {
	isAutoCompletePopup?: boolean;
	cancellable?: boolean;
	popupParent?: string;
	clickToClose?: string;
	posx: number;
	posy: number;
}

// callback triggered by user actions
type JSDialogCallback = (
	objectType: string,
	eventType: string,
	object: any,
	data: any,
	builder: any,
) => void;

// used to define menus
type MenuDefinition = {
	id: string; // unique identifier
	type: undefined | 'action' | 'menu' | 'separator' | 'html'; // type of entry
	text: string; // displayed text
	hint: string; // hint text
	uno: string; // uno command
	action: string; // dispatch command
	htmlId: string; // id of HTMLContent
	img: string; // icon name
	icon: string; // icon name FIXME: duplicated property, used in exportMenuButton
	checked: boolean; // state of check mark
	items: Array<any>; // submenu
};

interface TextWidget extends WidgetJSON {
	text: string;
}

interface TreeWidget extends WidgetJSON {
	text: string;
	singleclickactivate: boolean;
	fireKeyEvents: boolean;
	entries: Array<Entry>;
}
