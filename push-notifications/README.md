# @capacitor/push-notifications

The Push Notifications API provides access to native push notifications.

## Install

```bash
npm install @capacitor/push-notifications
npx cap sync
```

## API

<docgen-index>

* [`register()`](#register)
* [`getDeliveredNotifications()`](#getdeliverednotifications)
* [`removeDeliveredNotifications(...)`](#removedeliverednotifications)
* [`removeAllDeliveredNotifications()`](#removealldeliverednotifications)
* [`createChannel(...)`](#createchannel)
* [`deleteChannel(...)`](#deletechannel)
* [`listChannels()`](#listchannels)
* [`checkPermissions()`](#checkpermissions)
* [`requestPermissions()`](#requestpermissions)
* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### register()

```typescript
register() => Promise<void>
```

Register the app to receive push notifications.
Will trigger registration event with the push token
or registrationError if there was some problem.
Doesn't prompt the user for notification permissions, use requestPermission() first.

--------------------


### getDeliveredNotifications()

```typescript
getDeliveredNotifications() => Promise<PushNotificationDeliveredList>
```

Returns the notifications that are visible on the notifications screen.

**Returns:** <code>Promise&lt;<a href="#pushnotificationdeliveredlist">PushNotificationDeliveredList</a>&gt;</code>

--------------------


### removeDeliveredNotifications(...)

```typescript
removeDeliveredNotifications(delivered: PushNotificationDeliveredList) => Promise<void>
```

Removes the specified notifications from the notifications screen.

| Param           | Type                                                                                    | Description                      |
| --------------- | --------------------------------------------------------------------------------------- | -------------------------------- |
| **`delivered`** | <code><a href="#pushnotificationdeliveredlist">PushNotificationDeliveredList</a></code> | list of delivered notifications. |

--------------------


### removeAllDeliveredNotifications()

```typescript
removeAllDeliveredNotifications() => Promise<void>
```

Removes all the notifications from the notifications screen.

--------------------


### createChannel(...)

```typescript
createChannel(channel: Channel) => Promise<void>
```

On Android O or newer (SDK 26+) creates a notification channel.

| Param         | Type                                        | Description |
| ------------- | ------------------------------------------- | ----------- |
| **`channel`** | <code><a href="#channel">Channel</a></code> | to create.  |

--------------------


### deleteChannel(...)

```typescript
deleteChannel(channel: Channel) => Promise<void>
```

On Android O or newer (SDK 26+) deletes a notification channel.

| Param         | Type                                        | Description |
| ------------- | ------------------------------------------- | ----------- |
| **`channel`** | <code><a href="#channel">Channel</a></code> | to delete.  |

--------------------


### listChannels()

```typescript
listChannels() => Promise<ListChannelsResult>
```

On Android O or newer (SDK 26+) list the available notification channels.

**Returns:** <code>Promise&lt;<a href="#listchannelsresult">ListChannelsResult</a>&gt;</code>

--------------------


### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

Check permission to receive push notifications.

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**Since:** 1.0.0

--------------------


### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

Request permission to receive push notifications.

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**Since:** 1.0.0

--------------------


### addListener(...)

```typescript
addListener(eventName: 'registration', listenerFunc: (token: PushNotificationToken) => void) => PluginListenerHandle
```

Event called when the push notification registration finished without problems.
Provides the push notification token.

| Param              | Type                                                                                        | Description                   |
| ------------------ | ------------------------------------------------------------------------------------------- | ----------------------------- |
| **`eventName`**    | <code>"registration"</code>                                                                 | registration.                 |
| **`listenerFunc`** | <code>(token: <a href="#pushnotificationtoken">PushNotificationToken</a>) =&gt; void</code> | callback with the push token. |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener(...)

```typescript
addListener(eventName: 'registrationError', listenerFunc: (error: any) => void) => PluginListenerHandle
```

Event called when the push notification registration finished with problems.
Provides an error with the registration problem.

| Param              | Type                                 | Description                           |
| ------------------ | ------------------------------------ | ------------------------------------- |
| **`eventName`**    | <code>"registrationError"</code>     | registrationError.                    |
| **`listenerFunc`** | <code>(error: any) =&gt; void</code> | callback with the registration error. |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener(...)

```typescript
addListener(eventName: 'pushNotificationReceived', listenerFunc: (notification: PushNotificationSchema) => void) => PluginListenerHandle
```

Event called when the device receives a push notification.

| Param              | Type                                                                                                 | Description                              |
| ------------------ | ---------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **`eventName`**    | <code>"pushNotificationReceived"</code>                                                              | pushNotificationReceived.                |
| **`listenerFunc`** | <code>(notification: <a href="#pushnotificationschema">PushNotificationSchema</a>) =&gt; void</code> | callback with the received notification. |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener(...)

```typescript
addListener(eventName: 'pushNotificationActionPerformed', listenerFunc: (notification: PushNotificationActionPerformed) => void) => PluginListenerHandle
```

Event called when an action is performed on a pusn notification.

| Param              | Type                                                                                                                   | Description                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| **`eventName`**    | <code>"pushNotificationActionPerformed"</code>                                                                         | pushNotificationActionPerformed.       |
| **`listenerFunc`** | <code>(notification: <a href="#pushnotificationactionperformed">PushNotificationActionPerformed</a>) =&gt; void</code> | callback with the notification action. |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => void
```

Remove all native listeners for this plugin.

--------------------


### Interfaces


#### PushNotificationDeliveredList

| Prop                | Type                                  |
| ------------------- | ------------------------------------- |
| **`notifications`** | <code>PushNotificationSchema[]</code> |


#### PushNotificationSchema

| Prop               | Type                 | Description                                                                                                      |
| ------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **`title`**        | <code>string</code>  |                                                                                                                  |
| **`subtitle`**     | <code>string</code>  |                                                                                                                  |
| **`body`**         | <code>string</code>  |                                                                                                                  |
| **`id`**           | <code>string</code>  |                                                                                                                  |
| **`badge`**        | <code>number</code>  |                                                                                                                  |
| **`notification`** | <code>any</code>     |                                                                                                                  |
| **`data`**         | <code>any</code>     |                                                                                                                  |
| **`click_action`** | <code>string</code>  |                                                                                                                  |
| **`link`**         | <code>string</code>  |                                                                                                                  |
| **`group`**        | <code>string</code>  | Android only: set the group identifier for notification grouping, like threadIdentifier on iOS.                  |
| **`groupSummary`** | <code>boolean</code> | Android only: designate this notification as the summary for a group (should be used with the `group` property). |


#### Channel

| Prop              | Type                               |
| ----------------- | ---------------------------------- |
| **`id`**          | <code>string</code>                |
| **`name`**        | <code>string</code>                |
| **`description`** | <code>string</code>                |
| **`sound`**       | <code>string</code>                |
| **`importance`**  | <code>1 \| 2 \| 5 \| 4 \| 3</code> |
| **`visibility`**  | <code>0 \| 1 \| -1</code>          |
| **`lights`**      | <code>boolean</code>               |
| **`lightColor`**  | <code>string</code>                |
| **`vibration`**   | <code>boolean</code>               |


#### ListChannelsResult

| Prop           | Type                   |
| -------------- | ---------------------- |
| **`channels`** | <code>Channel[]</code> |


#### PermissionStatus

| Prop          | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`receive`** | <code>"prompt" \| "prompt-with-rationale" \| "granted" \| "denied"</code> |


#### PluginListenerHandle

| Prop         | Type                       |
| ------------ | -------------------------- |
| **`remove`** | <code>() =&gt; void</code> |


#### PushNotificationToken

| Prop        | Type                |
| ----------- | ------------------- |
| **`value`** | <code>string</code> |


#### PushNotificationActionPerformed

| Prop               | Type                                                                      |
| ------------------ | ------------------------------------------------------------------------- |
| **`actionId`**     | <code>string</code>                                                       |
| **`inputValue`**   | <code>string</code>                                                       |
| **`notification`** | <code><a href="#pushnotificationschema">PushNotificationSchema</a></code> |

</docgen-api>