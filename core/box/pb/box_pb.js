// source: box.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.ActivateReq', null, global);
goog.exportSymbol('proto.ActivateResp', null, global);
goog.exportSymbol('proto.AddUserReq', null, global);
goog.exportSymbol('proto.Addressbook', null, global);
goog.exportSymbol('proto.AddressbookBackupReq', null, global);
goog.exportSymbol('proto.AddressbookDeleteAllReq', null, global);
goog.exportSymbol('proto.AddressbookDeleteReq', null, global);
goog.exportSymbol('proto.AddressbookListReq', null, global);
goog.exportSymbol('proto.AddressbookListResp', null, global);
goog.exportSymbol('proto.AppointAddressListReq', null, global);
goog.exportSymbol('proto.AppointAddressListResp', null, global);
goog.exportSymbol('proto.AppointFileListItem', null, global);
goog.exportSymbol('proto.AppointFileListReq', null, global);
goog.exportSymbol('proto.AppointFileListResp', null, global);
goog.exportSymbol('proto.BackupCountReq', null, global);
goog.exportSymbol('proto.BackupCountResp', null, global);
goog.exportSymbol('proto.BackupsAddReq', null, global);
goog.exportSymbol('proto.BackupsListItem', null, global);
goog.exportSymbol('proto.BackupsListReq', null, global);
goog.exportSymbol('proto.BackupsListResp', null, global);
goog.exportSymbol('proto.BoxUpdateReq', null, global);
goog.exportSymbol('proto.BoxUpdateResp', null, global);
goog.exportSymbol('proto.ChangeSpaceReq', null, global);
goog.exportSymbol('proto.CidBackupsListItem', null, global);
goog.exportSymbol('proto.CidBackupsListReq', null, global);
goog.exportSymbol('proto.CidBackupsListResp', null, global);
goog.exportSymbol('proto.Code', null, global);
goog.exportSymbol('proto.CommonResp', null, global);
goog.exportSymbol('proto.CreateWalletReq', null, global);
goog.exportSymbol('proto.DeleteUserReq', null, global);
goog.exportSymbol('proto.DeviceInfoReq', null, global);
goog.exportSymbol('proto.DeviceInfoResp', null, global);
goog.exportSymbol('proto.DeviceStateReq', null, global);
goog.exportSymbol('proto.DeviceStateResp', null, global);
goog.exportSymbol('proto.DiskCountReq', null, global);
goog.exportSymbol('proto.DiskCountResp', null, global);
goog.exportSymbol('proto.DiskSpace', null, global);
goog.exportSymbol('proto.DownloadFileReq', null, global);
goog.exportSymbol('proto.DownloadFileResp', null, global);
goog.exportSymbol('proto.EnableFilReq', null, global);
goog.exportSymbol('proto.EnableUserReq', null, global);
goog.exportSymbol('proto.FileBackupListReq', null, global);
goog.exportSymbol('proto.FileBackupListResp', null, global);
goog.exportSymbol('proto.FileCloseShareReq', null, global);
goog.exportSymbol('proto.FileCopyReq', null, global);
goog.exportSymbol('proto.FileDeleteReq', null, global);
goog.exportSymbol('proto.FileEditShareReq', null, global);
goog.exportSymbol('proto.FileItem', null, global);
goog.exportSymbol('proto.FileListReq', null, global);
goog.exportSymbol('proto.FileListResp', null, global);
goog.exportSymbol('proto.FileLogListReq', null, global);
goog.exportSymbol('proto.FileLogListResp', null, global);
goog.exportSymbol('proto.FileMoveReq', null, global);
goog.exportSymbol('proto.FileRecordReq', null, global);
goog.exportSymbol('proto.FileRenameReq', null, global);
goog.exportSymbol('proto.FileShareReq', null, global);
goog.exportSymbol('proto.FileStarReq', null, global);
goog.exportSymbol('proto.FileUnShareReq', null, global);
goog.exportSymbol('proto.FileUnstarReq', null, global);
goog.exportSymbol('proto.ForgetPassReq', null, global);
goog.exportSymbol('proto.ForgetPassResp', null, global);
goog.exportSymbol('proto.GetBackUpStatusReq', null, global);
goog.exportSymbol('proto.GetBackUpStatusResp', null, global);
goog.exportSymbol('proto.GetMinerReq', null, global);
goog.exportSymbol('proto.GetMinerResp', null, global);
goog.exportSymbol('proto.GetTokenByQrcodeReq', null, global);
goog.exportSymbol('proto.GetTokenByQrcodeResp', null, global);
goog.exportSymbol('proto.GetUserAvatarReq', null, global);
goog.exportSymbol('proto.GetUserAvatarResp', null, global);
goog.exportSymbol('proto.GetWalletKeyReq', null, global);
goog.exportSymbol('proto.GetWalletKeyResp', null, global);
goog.exportSymbol('proto.GetWalletReq', null, global);
goog.exportSymbol('proto.GetWalletResp', null, global);
goog.exportSymbol('proto.LoginReq', null, global);
goog.exportSymbol('proto.LoginResp', null, global);
goog.exportSymbol('proto.Miner', null, global);
goog.exportSymbol('proto.NewFolderReq', null, global);
goog.exportSymbol('proto.NewFolderResp', null, global);
goog.exportSymbol('proto.PeerAddressReq', null, global);
goog.exportSymbol('proto.PeerAddressResp', null, global);
goog.exportSymbol('proto.PingReq', null, global);
goog.exportSymbol('proto.PingResp', null, global);
goog.exportSymbol('proto.RecycleDeleteReq', null, global);
goog.exportSymbol('proto.RecycleItem', null, global);
goog.exportSymbol('proto.RecycleListReq', null, global);
goog.exportSymbol('proto.RecycleListResp', null, global);
goog.exportSymbol('proto.RecycleRestoreReq', null, global);
goog.exportSymbol('proto.RelayReq', null, global);
goog.exportSymbol('proto.RelayResp', null, global);
goog.exportSymbol('proto.ResetPasswordReq', null, global);
goog.exportSymbol('proto.ScanQrcodeReq', null, global);
goog.exportSymbol('proto.SearchFileMd5Req', null, global);
goog.exportSymbol('proto.SearchFileMd5Resp', null, global);
goog.exportSymbol('proto.ShareItem', null, global);
goog.exportSymbol('proto.ShareListReq', null, global);
goog.exportSymbol('proto.ShareListResp', null, global);
goog.exportSymbol('proto.SyncAddReq', null, global);
goog.exportSymbol('proto.SyncDelReq', null, global);
goog.exportSymbol('proto.SyncEditReq', null, global);
goog.exportSymbol('proto.SyncListItem', null, global);
goog.exportSymbol('proto.SyncListReq', null, global);
goog.exportSymbol('proto.SyncListResp', null, global);
goog.exportSymbol('proto.UpdatePasswordReq', null, global);
goog.exportSymbol('proto.UpdateUserAvatarReq', null, global);
goog.exportSymbol('proto.UploadFileReq', null, global);
goog.exportSymbol('proto.UploadFileToFilcoinReq', null, global);
goog.exportSymbol('proto.User', null, global);
goog.exportSymbol('proto.UserInfoReq', null, global);
goog.exportSymbol('proto.UserInfoResp', null, global);
goog.exportSymbol('proto.UserListReq', null, global);
goog.exportSymbol('proto.UserListResp', null, global);
goog.exportSymbol('proto.UserRenameReq', null, global);
goog.exportSymbol('proto.UserShareItem', null, global);
goog.exportSymbol('proto.UserShareListReq', null, global);
goog.exportSymbol('proto.UserShareListResp', null, global);
goog.exportSymbol('proto.WalletItem', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RelayReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RelayReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RelayReq.displayName = 'proto.RelayReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RelayResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RelayResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RelayResp.displayName = 'proto.RelayResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CommonResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CommonResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CommonResp.displayName = 'proto.CommonResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PingReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PingReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PingReq.displayName = 'proto.PingReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PingResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PingResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PingResp.displayName = 'proto.PingResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PeerAddressReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PeerAddressReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PeerAddressReq.displayName = 'proto.PeerAddressReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PeerAddressResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PeerAddressResp.repeatedFields_, null);
};
goog.inherits(proto.PeerAddressResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PeerAddressResp.displayName = 'proto.PeerAddressResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.User.displayName = 'proto.User';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DiskSpace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DiskSpace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DiskSpace.displayName = 'proto.DiskSpace';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeviceStateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeviceStateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeviceStateReq.displayName = 'proto.DeviceStateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeviceStateResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeviceStateResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeviceStateResp.displayName = 'proto.DeviceStateResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActivateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActivateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActivateReq.displayName = 'proto.ActivateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ActivateResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ActivateResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ActivateResp.displayName = 'proto.ActivateResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ForgetPassReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ForgetPassReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ForgetPassReq.displayName = 'proto.ForgetPassReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ForgetPassResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ForgetPassResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ForgetPassResp.displayName = 'proto.ForgetPassResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LoginReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LoginReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LoginReq.displayName = 'proto.LoginReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LoginResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LoginResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LoginResp.displayName = 'proto.LoginResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AddUserReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AddUserReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AddUserReq.displayName = 'proto.AddUserReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserInfoReq.displayName = 'proto.UserInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserInfoResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserInfoResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserInfoResp.displayName = 'proto.UserInfoResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserListReq.displayName = 'proto.UserListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.UserListResp.repeatedFields_, null);
};
goog.inherits(proto.UserListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserListResp.displayName = 'proto.UserListResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UpdatePasswordReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdatePasswordReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UpdatePasswordReq.displayName = 'proto.UpdatePasswordReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserRenameReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserRenameReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserRenameReq.displayName = 'proto.UserRenameReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetUserAvatarReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetUserAvatarReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetUserAvatarReq.displayName = 'proto.GetUserAvatarReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetUserAvatarResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetUserAvatarResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetUserAvatarResp.displayName = 'proto.GetUserAvatarResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UpdateUserAvatarReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdateUserAvatarReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UpdateUserAvatarReq.displayName = 'proto.UpdateUserAvatarReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ResetPasswordReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ResetPasswordReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ResetPasswordReq.displayName = 'proto.ResetPasswordReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EnableUserReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EnableUserReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EnableUserReq.displayName = 'proto.EnableUserReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeleteUserReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeleteUserReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeleteUserReq.displayName = 'proto.DeleteUserReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ChangeSpaceReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChangeSpaceReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ChangeSpaceReq.displayName = 'proto.ChangeSpaceReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ScanQrcodeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ScanQrcodeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ScanQrcodeReq.displayName = 'proto.ScanQrcodeReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetTokenByQrcodeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetTokenByQrcodeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetTokenByQrcodeReq.displayName = 'proto.GetTokenByQrcodeReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetTokenByQrcodeResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetTokenByQrcodeResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetTokenByQrcodeResp.displayName = 'proto.GetTokenByQrcodeResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FileItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileItem.displayName = 'proto.FileItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NewFolderReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NewFolderReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NewFolderReq.displayName = 'proto.NewFolderReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NewFolderResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NewFolderResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NewFolderResp.displayName = 'proto.NewFolderResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UploadFileReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UploadFileReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UploadFileReq.displayName = 'proto.UploadFileReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DownloadFileReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DownloadFileReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DownloadFileReq.displayName = 'proto.DownloadFileReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DownloadFileResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DownloadFileResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DownloadFileResp.displayName = 'proto.DownloadFileResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FileListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileListReq.displayName = 'proto.FileListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.FileListResp.repeatedFields_, null);
};
goog.inherits(proto.FileListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileListResp.displayName = 'proto.FileListResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileRenameReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FileRenameReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileRenameReq.displayName = 'proto.FileRenameReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileDeleteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.FileDeleteReq.repeatedFields_, null);
};
goog.inherits(proto.FileDeleteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileDeleteReq.displayName = 'proto.FileDeleteReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileMoveReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FileMoveReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileMoveReq.displayName = 'proto.FileMoveReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileCopyReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FileCopyReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileCopyReq.displayName = 'proto.FileCopyReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileStarReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.FileStarReq.repeatedFields_, null);
};
goog.inherits(proto.FileStarReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileStarReq.displayName = 'proto.FileStarReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileUnstarReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.FileUnstarReq.repeatedFields_, null);
};
goog.inherits(proto.FileUnstarReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileUnstarReq.displayName = 'proto.FileUnstarReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RecycleItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RecycleItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RecycleItem.displayName = 'proto.RecycleItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RecycleListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RecycleListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RecycleListReq.displayName = 'proto.RecycleListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RecycleListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RecycleListResp.repeatedFields_, null);
};
goog.inherits(proto.RecycleListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RecycleListResp.displayName = 'proto.RecycleListResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RecycleDeleteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RecycleDeleteReq.repeatedFields_, null);
};
goog.inherits(proto.RecycleDeleteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RecycleDeleteReq.displayName = 'proto.RecycleDeleteReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RecycleRestoreReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RecycleRestoreReq.repeatedFields_, null);
};
goog.inherits(proto.RecycleRestoreReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RecycleRestoreReq.displayName = 'proto.RecycleRestoreReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileShareReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.FileShareReq.repeatedFields_, null);
};
goog.inherits(proto.FileShareReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileShareReq.displayName = 'proto.FileShareReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileUnShareReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.FileUnShareReq.repeatedFields_, null);
};
goog.inherits(proto.FileUnShareReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileUnShareReq.displayName = 'proto.FileUnShareReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileCloseShareReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FileCloseShareReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileCloseShareReq.displayName = 'proto.FileCloseShareReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ShareListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ShareListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ShareListReq.displayName = 'proto.ShareListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ShareItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ShareItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ShareItem.displayName = 'proto.ShareItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ShareListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ShareListResp.repeatedFields_, null);
};
goog.inherits(proto.ShareListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ShareListResp.displayName = 'proto.ShareListResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserShareListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserShareListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserShareListReq.displayName = 'proto.UserShareListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserShareItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserShareItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserShareItem.displayName = 'proto.UserShareItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserShareListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.UserShareListResp.repeatedFields_, null);
};
goog.inherits(proto.UserShareListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserShareListResp.displayName = 'proto.UserShareListResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileEditShareReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.FileEditShareReq.repeatedFields_, null);
};
goog.inherits(proto.FileEditShareReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileEditShareReq.displayName = 'proto.FileEditShareReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AddressbookBackupReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AddressbookBackupReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AddressbookBackupReq.displayName = 'proto.AddressbookBackupReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AddressbookDeleteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AddressbookDeleteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AddressbookDeleteReq.displayName = 'proto.AddressbookDeleteReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AddressbookDeleteAllReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AddressbookDeleteAllReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AddressbookDeleteAllReq.displayName = 'proto.AddressbookDeleteAllReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AddressbookListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AddressbookListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AddressbookListReq.displayName = 'proto.AddressbookListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Addressbook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Addressbook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Addressbook.displayName = 'proto.Addressbook';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AddressbookListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.AddressbookListResp.repeatedFields_, null);
};
goog.inherits(proto.AddressbookListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AddressbookListResp.displayName = 'proto.AddressbookListResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppointAddressListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppointAddressListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppointAddressListReq.displayName = 'proto.AppointAddressListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppointAddressListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.AppointAddressListResp.repeatedFields_, null);
};
goog.inherits(proto.AppointAddressListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppointAddressListResp.displayName = 'proto.AppointAddressListResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppointFileListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppointFileListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppointFileListReq.displayName = 'proto.AppointFileListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppointFileListItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppointFileListItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppointFileListItem.displayName = 'proto.AppointFileListItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppointFileListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.AppointFileListResp.repeatedFields_, null);
};
goog.inherits(proto.AppointFileListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppointFileListResp.displayName = 'proto.AppointFileListResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileBackupListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FileBackupListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileBackupListReq.displayName = 'proto.FileBackupListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileBackupListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.FileBackupListResp.repeatedFields_, null);
};
goog.inherits(proto.FileBackupListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileBackupListResp.displayName = 'proto.FileBackupListResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SearchFileMd5Req = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SearchFileMd5Req, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SearchFileMd5Req.displayName = 'proto.SearchFileMd5Req';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SearchFileMd5Resp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SearchFileMd5Resp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SearchFileMd5Resp.displayName = 'proto.SearchFileMd5Resp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileRecordReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FileRecordReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileRecordReq.displayName = 'proto.FileRecordReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BackupsListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BackupsListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BackupsListReq.displayName = 'proto.BackupsListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BackupsListItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BackupsListItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BackupsListItem.displayName = 'proto.BackupsListItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BackupsListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.BackupsListResp.repeatedFields_, null);
};
goog.inherits(proto.BackupsListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BackupsListResp.displayName = 'proto.BackupsListResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BackupsAddReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BackupsAddReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BackupsAddReq.displayName = 'proto.BackupsAddReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileLogListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FileLogListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileLogListReq.displayName = 'proto.FileLogListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FileLogListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FileLogListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FileLogListResp.displayName = 'proto.FileLogListResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SyncListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SyncListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SyncListReq.displayName = 'proto.SyncListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SyncListItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SyncListItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SyncListItem.displayName = 'proto.SyncListItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SyncListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SyncListResp.repeatedFields_, null);
};
goog.inherits(proto.SyncListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SyncListResp.displayName = 'proto.SyncListResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SyncAddReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SyncAddReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SyncAddReq.displayName = 'proto.SyncAddReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SyncEditReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SyncEditReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SyncEditReq.displayName = 'proto.SyncEditReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SyncDelReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SyncDelReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SyncDelReq.displayName = 'proto.SyncDelReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BoxUpdateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BoxUpdateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BoxUpdateReq.displayName = 'proto.BoxUpdateReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BoxUpdateResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BoxUpdateResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BoxUpdateResp.displayName = 'proto.BoxUpdateResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeviceInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeviceInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeviceInfoReq.displayName = 'proto.DeviceInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeviceInfoResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeviceInfoResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeviceInfoResp.displayName = 'proto.DeviceInfoResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DiskCountReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DiskCountReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DiskCountReq.displayName = 'proto.DiskCountReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DiskCountResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DiskCountResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DiskCountResp.displayName = 'proto.DiskCountResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CreateWalletReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CreateWalletReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CreateWalletReq.displayName = 'proto.CreateWalletReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetWalletReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetWalletReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetWalletReq.displayName = 'proto.GetWalletReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WalletItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WalletItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WalletItem.displayName = 'proto.WalletItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetWalletResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetWalletResp.repeatedFields_, null);
};
goog.inherits(proto.GetWalletResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetWalletResp.displayName = 'proto.GetWalletResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetWalletKeyReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetWalletKeyReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetWalletKeyReq.displayName = 'proto.GetWalletKeyReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetWalletKeyResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetWalletKeyResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetWalletKeyResp.displayName = 'proto.GetWalletKeyResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EnableFilReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EnableFilReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EnableFilReq.displayName = 'proto.EnableFilReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UploadFileToFilcoinReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UploadFileToFilcoinReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UploadFileToFilcoinReq.displayName = 'proto.UploadFileToFilcoinReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetBackUpStatusReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetBackUpStatusReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetBackUpStatusReq.displayName = 'proto.GetBackUpStatusReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetBackUpStatusResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetBackUpStatusResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetBackUpStatusResp.displayName = 'proto.GetBackUpStatusResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetMinerReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetMinerReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetMinerReq.displayName = 'proto.GetMinerReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetMinerResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetMinerResp.repeatedFields_, null);
};
goog.inherits(proto.GetMinerResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetMinerResp.displayName = 'proto.GetMinerResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Miner = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Miner, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Miner.displayName = 'proto.Miner';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CidBackupsListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CidBackupsListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CidBackupsListReq.displayName = 'proto.CidBackupsListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CidBackupsListItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CidBackupsListItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CidBackupsListItem.displayName = 'proto.CidBackupsListItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CidBackupsListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.CidBackupsListResp.repeatedFields_, null);
};
goog.inherits(proto.CidBackupsListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CidBackupsListResp.displayName = 'proto.CidBackupsListResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BackupCountReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BackupCountReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BackupCountReq.displayName = 'proto.BackupCountReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BackupCountResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BackupCountResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BackupCountResp.displayName = 'proto.BackupCountResp';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RelayReq.prototype.toObject = function(opt_includeInstance) {
  return proto.RelayReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RelayReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RelayReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocolid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bodybuffer: msg.getBodybuffer_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RelayReq}
 */
proto.RelayReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RelayReq;
  return proto.RelayReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RelayReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RelayReq}
 */
proto.RelayReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocolid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBodybuffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RelayReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RelayReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RelayReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RelayReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocolid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBodybuffer_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string ProtocolId = 1;
 * @return {string}
 */
proto.RelayReq.prototype.getProtocolid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RelayReq} returns this
 */
proto.RelayReq.prototype.setProtocolid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes BodyBuffer = 2;
 * @return {!(string|Uint8Array)}
 */
proto.RelayReq.prototype.getBodybuffer = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes BodyBuffer = 2;
 * This is a type-conversion wrapper around `getBodybuffer()`
 * @return {string}
 */
proto.RelayReq.prototype.getBodybuffer_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBodybuffer()));
};


/**
 * optional bytes BodyBuffer = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBodybuffer()`
 * @return {!Uint8Array}
 */
proto.RelayReq.prototype.getBodybuffer_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBodybuffer()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.RelayReq} returns this
 */
proto.RelayReq.prototype.setBodybuffer = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RelayResp.prototype.toObject = function(opt_includeInstance) {
  return proto.RelayResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RelayResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RelayResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocolid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bodybuffer: msg.getBodybuffer_asB64(),
    code: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RelayResp}
 */
proto.RelayResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RelayResp;
  return proto.RelayResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RelayResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RelayResp}
 */
proto.RelayResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocolid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBodybuffer(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RelayResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RelayResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RelayResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RelayResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocolid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBodybuffer_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getCode();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string ProtocolId = 1;
 * @return {string}
 */
proto.RelayResp.prototype.getProtocolid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RelayResp} returns this
 */
proto.RelayResp.prototype.setProtocolid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes BodyBuffer = 2;
 * @return {!(string|Uint8Array)}
 */
proto.RelayResp.prototype.getBodybuffer = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes BodyBuffer = 2;
 * This is a type-conversion wrapper around `getBodybuffer()`
 * @return {string}
 */
proto.RelayResp.prototype.getBodybuffer_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBodybuffer()));
};


/**
 * optional bytes BodyBuffer = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBodybuffer()`
 * @return {!Uint8Array}
 */
proto.RelayResp.prototype.getBodybuffer_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBodybuffer()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.RelayResp} returns this
 */
proto.RelayResp.prototype.setBodybuffer = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint32 code = 3;
 * @return {number}
 */
proto.RelayResp.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.RelayResp} returns this
 */
proto.RelayResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CommonResp.prototype.toObject = function(opt_includeInstance) {
  return proto.CommonResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CommonResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CommonResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CommonResp}
 */
proto.CommonResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CommonResp;
  return proto.CommonResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CommonResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CommonResp}
 */
proto.CommonResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CommonResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CommonResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CommonResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CommonResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.CommonResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.CommonResp} returns this
 */
proto.CommonResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.CommonResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.CommonResp} returns this
 */
proto.CommonResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.CommonResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.CommonResp} returns this
 */
proto.CommonResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PingReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PingReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PingReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PingReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PingReq}
 */
proto.PingReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PingReq;
  return proto.PingReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PingReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PingReq}
 */
proto.PingReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PingReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PingReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PingReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PingReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.PingReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PingReq} returns this
 */
proto.PingReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PingResp.prototype.toObject = function(opt_includeInstance) {
  return proto.PingResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PingResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PingResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PingResp}
 */
proto.PingResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PingResp;
  return proto.PingResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PingResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PingResp}
 */
proto.PingResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PingResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PingResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PingResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PingResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.PingResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PingResp} returns this
 */
proto.PingResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PeerAddressReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PeerAddressReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PeerAddressReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PeerAddressReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    peerid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PeerAddressReq}
 */
proto.PeerAddressReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PeerAddressReq;
  return proto.PeerAddressReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PeerAddressReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PeerAddressReq}
 */
proto.PeerAddressReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PeerAddressReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PeerAddressReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PeerAddressReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PeerAddressReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.PeerAddressReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PeerAddressReq} returns this
 */
proto.PeerAddressReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string peerId = 2;
 * @return {string}
 */
proto.PeerAddressReq.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PeerAddressReq} returns this
 */
proto.PeerAddressReq.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PeerAddressResp.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PeerAddressResp.prototype.toObject = function(opt_includeInstance) {
  return proto.PeerAddressResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PeerAddressResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PeerAddressResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    peeraddressList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    msg: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PeerAddressResp}
 */
proto.PeerAddressResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PeerAddressResp;
  return proto.PeerAddressResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PeerAddressResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PeerAddressResp}
 */
proto.PeerAddressResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addPeeraddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PeerAddressResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PeerAddressResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PeerAddressResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PeerAddressResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPeeraddressList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.PeerAddressResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PeerAddressResp} returns this
 */
proto.PeerAddressResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.PeerAddressResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.PeerAddressResp} returns this
 */
proto.PeerAddressResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated string peerAddress = 3;
 * @return {!Array<string>}
 */
proto.PeerAddressResp.prototype.getPeeraddressList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.PeerAddressResp} returns this
 */
proto.PeerAddressResp.prototype.setPeeraddressList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.PeerAddressResp} returns this
 */
proto.PeerAddressResp.prototype.addPeeraddress = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PeerAddressResp} returns this
 */
proto.PeerAddressResp.prototype.clearPeeraddressList = function() {
  return this.setPeeraddressList([]);
};


/**
 * optional string msg = 4;
 * @return {string}
 */
proto.PeerAddressResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.PeerAddressResp} returns this
 */
proto.PeerAddressResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.User.prototype.toObject = function(opt_includeInstance) {
  return proto.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    role: jspb.Message.getFieldWithDefault(msg, 3, 0),
    allocatedspace: jspb.Message.getFieldWithDefault(msg, 4, 0),
    usedspace: jspb.Message.getFieldWithDefault(msg, 5, 0),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0),
    devicename: jspb.Message.getFieldWithDefault(msg, 7, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 8, 0),
    password: jspb.Message.getFieldWithDefault(msg, 9, ""),
    syncfil: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.User}
 */
proto.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.User;
  return proto.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.User}
 */
proto.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRole(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAllocatedspace(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUsedspace(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicename(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSyncfil(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRole();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAllocatedspace();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getUsedspace();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getDevicename();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSyncfil();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.User.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.User} returns this
 */
proto.User.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.User.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.User} returns this
 */
proto.User.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 role = 3;
 * @return {number}
 */
proto.User.prototype.getRole = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.User} returns this
 */
proto.User.prototype.setRole = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 allocatedSpace = 4;
 * @return {number}
 */
proto.User.prototype.getAllocatedspace = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.User} returns this
 */
proto.User.prototype.setAllocatedspace = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 usedSpace = 5;
 * @return {number}
 */
proto.User.prototype.getUsedspace = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.User} returns this
 */
proto.User.prototype.setUsedspace = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 status = 6;
 * @return {number}
 */
proto.User.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.User} returns this
 */
proto.User.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string deviceName = 7;
 * @return {string}
 */
proto.User.prototype.getDevicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.User} returns this
 */
proto.User.prototype.setDevicename = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 createdAt = 8;
 * @return {number}
 */
proto.User.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.User} returns this
 */
proto.User.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string password = 9;
 * @return {string}
 */
proto.User.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.User} returns this
 */
proto.User.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 syncFil = 10;
 * @return {number}
 */
proto.User.prototype.getSyncfil = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.User} returns this
 */
proto.User.prototype.setSyncfil = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DiskSpace.prototype.toObject = function(opt_includeInstance) {
  return proto.DiskSpace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DiskSpace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DiskSpace.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    adminused: jspb.Message.getFieldWithDefault(msg, 2, 0),
    otherallocated: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DiskSpace}
 */
proto.DiskSpace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DiskSpace;
  return proto.DiskSpace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DiskSpace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DiskSpace}
 */
proto.DiskSpace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAdminused(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOtherallocated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DiskSpace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DiskSpace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DiskSpace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DiskSpace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAdminused();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getOtherallocated();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 total = 1;
 * @return {number}
 */
proto.DiskSpace.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.DiskSpace} returns this
 */
proto.DiskSpace.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 adminUsed = 2;
 * @return {number}
 */
proto.DiskSpace.prototype.getAdminused = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.DiskSpace} returns this
 */
proto.DiskSpace.prototype.setAdminused = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 otherAllocated = 3;
 * @return {number}
 */
proto.DiskSpace.prototype.getOtherallocated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.DiskSpace} returns this
 */
proto.DiskSpace.prototype.setOtherallocated = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeviceStateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.DeviceStateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeviceStateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceStateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    peerid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeviceStateReq}
 */
proto.DeviceStateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeviceStateReq;
  return proto.DeviceStateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeviceStateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeviceStateReq}
 */
proto.DeviceStateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeviceStateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeviceStateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeviceStateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceStateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.DeviceStateReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.DeviceStateReq} returns this
 */
proto.DeviceStateReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string peerId = 2;
 * @return {string}
 */
proto.DeviceStateReq.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceStateReq} returns this
 */
proto.DeviceStateReq.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeviceStateResp.prototype.toObject = function(opt_includeInstance) {
  return proto.DeviceStateResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeviceStateResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceStateResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    state: jspb.Message.getFieldWithDefault(msg, 3, 0),
    adminname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    adminavatar: msg.getAdminavatar_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeviceStateResp}
 */
proto.DeviceStateResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeviceStateResp;
  return proto.DeviceStateResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeviceStateResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeviceStateResp}
 */
proto.DeviceStateResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdminname(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAdminavatar(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeviceStateResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeviceStateResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeviceStateResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceStateResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getState();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAdminname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAdminavatar_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.DeviceStateResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.DeviceStateResp} returns this
 */
proto.DeviceStateResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.DeviceStateResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.DeviceStateResp} returns this
 */
proto.DeviceStateResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 state = 3;
 * @return {number}
 */
proto.DeviceStateResp.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.DeviceStateResp} returns this
 */
proto.DeviceStateResp.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string adminName = 4;
 * @return {string}
 */
proto.DeviceStateResp.prototype.getAdminname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceStateResp} returns this
 */
proto.DeviceStateResp.prototype.setAdminname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bytes adminAvatar = 5;
 * @return {!(string|Uint8Array)}
 */
proto.DeviceStateResp.prototype.getAdminavatar = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes adminAvatar = 5;
 * This is a type-conversion wrapper around `getAdminavatar()`
 * @return {string}
 */
proto.DeviceStateResp.prototype.getAdminavatar_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAdminavatar()));
};


/**
 * optional bytes adminAvatar = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAdminavatar()`
 * @return {!Uint8Array}
 */
proto.DeviceStateResp.prototype.getAdminavatar_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAdminavatar()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.DeviceStateResp} returns this
 */
proto.DeviceStateResp.prototype.setAdminavatar = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActivateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ActivateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActivateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActivateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    peerid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    randnonce: jspb.Message.getFieldWithDefault(msg, 5, ""),
    signature: jspb.Message.getFieldWithDefault(msg, 6, ""),
    devicename: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActivateReq}
 */
proto.ActivateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActivateReq;
  return proto.ActivateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActivateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActivateReq}
 */
proto.ActivateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRandnonce(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActivateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActivateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActivateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActivateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRandnonce();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDevicename();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.ActivateReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActivateReq} returns this
 */
proto.ActivateReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string peerId = 2;
 * @return {string}
 */
proto.ActivateReq.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ActivateReq} returns this
 */
proto.ActivateReq.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ActivateReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ActivateReq} returns this
 */
proto.ActivateReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.ActivateReq.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ActivateReq} returns this
 */
proto.ActivateReq.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string randNonce = 5;
 * @return {string}
 */
proto.ActivateReq.prototype.getRandnonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ActivateReq} returns this
 */
proto.ActivateReq.prototype.setRandnonce = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string signature = 6;
 * @return {string}
 */
proto.ActivateReq.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ActivateReq} returns this
 */
proto.ActivateReq.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string deviceName = 7;
 * @return {string}
 */
proto.ActivateReq.prototype.getDevicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ActivateReq} returns this
 */
proto.ActivateReq.prototype.setDevicename = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ActivateResp.prototype.toObject = function(opt_includeInstance) {
  return proto.ActivateResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ActivateResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActivateResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    token: jspb.Message.getFieldWithDefault(msg, 4, ""),
    userinfo: (f = msg.getUserinfo()) && proto.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ActivateResp}
 */
proto.ActivateResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ActivateResp;
  return proto.ActivateResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ActivateResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ActivateResp}
 */
proto.ActivateResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 5:
      var value = new proto.User;
      reader.readMessage(value,proto.User.deserializeBinaryFromReader);
      msg.setUserinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ActivateResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ActivateResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ActivateResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ActivateResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUserinfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.ActivateResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ActivateResp} returns this
 */
proto.ActivateResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.ActivateResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.ActivateResp} returns this
 */
proto.ActivateResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.ActivateResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ActivateResp} returns this
 */
proto.ActivateResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string token = 4;
 * @return {string}
 */
proto.ActivateResp.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ActivateResp} returns this
 */
proto.ActivateResp.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional User userInfo = 5;
 * @return {?proto.User}
 */
proto.ActivateResp.prototype.getUserinfo = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, proto.User, 5));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.ActivateResp} returns this
*/
proto.ActivateResp.prototype.setUserinfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ActivateResp} returns this
 */
proto.ActivateResp.prototype.clearUserinfo = function() {
  return this.setUserinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ActivateResp.prototype.hasUserinfo = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ForgetPassReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ForgetPassReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ForgetPassReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ForgetPassReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    peerid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    signature: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ForgetPassReq}
 */
proto.ForgetPassReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ForgetPassReq;
  return proto.ForgetPassReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ForgetPassReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ForgetPassReq}
 */
proto.ForgetPassReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ForgetPassReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ForgetPassReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ForgetPassReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ForgetPassReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.ForgetPassReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ForgetPassReq} returns this
 */
proto.ForgetPassReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string peerId = 2;
 * @return {string}
 */
proto.ForgetPassReq.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ForgetPassReq} returns this
 */
proto.ForgetPassReq.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string signature = 3;
 * @return {string}
 */
proto.ForgetPassReq.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ForgetPassReq} returns this
 */
proto.ForgetPassReq.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.ForgetPassReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ForgetPassReq} returns this
 */
proto.ForgetPassReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ForgetPassResp.prototype.toObject = function(opt_includeInstance) {
  return proto.ForgetPassResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ForgetPassResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ForgetPassResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    token: jspb.Message.getFieldWithDefault(msg, 4, ""),
    userinfo: (f = msg.getUserinfo()) && proto.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ForgetPassResp}
 */
proto.ForgetPassResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ForgetPassResp;
  return proto.ForgetPassResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ForgetPassResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ForgetPassResp}
 */
proto.ForgetPassResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 5:
      var value = new proto.User;
      reader.readMessage(value,proto.User.deserializeBinaryFromReader);
      msg.setUserinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ForgetPassResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ForgetPassResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ForgetPassResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ForgetPassResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUserinfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.ForgetPassResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ForgetPassResp} returns this
 */
proto.ForgetPassResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.ForgetPassResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.ForgetPassResp} returns this
 */
proto.ForgetPassResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.ForgetPassResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ForgetPassResp} returns this
 */
proto.ForgetPassResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string token = 4;
 * @return {string}
 */
proto.ForgetPassResp.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ForgetPassResp} returns this
 */
proto.ForgetPassResp.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional User userInfo = 5;
 * @return {?proto.User}
 */
proto.ForgetPassResp.prototype.getUserinfo = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, proto.User, 5));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.ForgetPassResp} returns this
*/
proto.ForgetPassResp.prototype.setUserinfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ForgetPassResp} returns this
 */
proto.ForgetPassResp.prototype.clearUserinfo = function() {
  return this.setUserinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ForgetPassResp.prototype.hasUserinfo = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LoginReq.prototype.toObject = function(opt_includeInstance) {
  return proto.LoginReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LoginReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoginReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    peerid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    devicename: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LoginReq}
 */
proto.LoginReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LoginReq;
  return proto.LoginReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LoginReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LoginReq}
 */
proto.LoginReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LoginReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LoginReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LoginReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoginReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDevicename();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.LoginReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.LoginReq} returns this
 */
proto.LoginReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string peerId = 2;
 * @return {string}
 */
proto.LoginReq.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoginReq} returns this
 */
proto.LoginReq.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.LoginReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoginReq} returns this
 */
proto.LoginReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.LoginReq.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoginReq} returns this
 */
proto.LoginReq.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string deviceName = 5;
 * @return {string}
 */
proto.LoginReq.prototype.getDevicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoginReq} returns this
 */
proto.LoginReq.prototype.setDevicename = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LoginResp.prototype.toObject = function(opt_includeInstance) {
  return proto.LoginResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LoginResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoginResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    token: jspb.Message.getFieldWithDefault(msg, 4, ""),
    userinfo: (f = msg.getUserinfo()) && proto.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LoginResp}
 */
proto.LoginResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LoginResp;
  return proto.LoginResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LoginResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LoginResp}
 */
proto.LoginResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 5:
      var value = new proto.User;
      reader.readMessage(value,proto.User.deserializeBinaryFromReader);
      msg.setUserinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LoginResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LoginResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LoginResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LoginResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUserinfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.LoginResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.LoginResp} returns this
 */
proto.LoginResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.LoginResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.LoginResp} returns this
 */
proto.LoginResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.LoginResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoginResp} returns this
 */
proto.LoginResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string token = 4;
 * @return {string}
 */
proto.LoginResp.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.LoginResp} returns this
 */
proto.LoginResp.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional User userInfo = 5;
 * @return {?proto.User}
 */
proto.LoginResp.prototype.getUserinfo = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, proto.User, 5));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.LoginResp} returns this
*/
proto.LoginResp.prototype.setUserinfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.LoginResp} returns this
 */
proto.LoginResp.prototype.clearUserinfo = function() {
  return this.setUserinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LoginResp.prototype.hasUserinfo = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AddUserReq.prototype.toObject = function(opt_includeInstance) {
  return proto.AddUserReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AddUserReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddUserReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    space: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AddUserReq}
 */
proto.AddUserReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AddUserReq;
  return proto.AddUserReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AddUserReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AddUserReq}
 */
proto.AddUserReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSpace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AddUserReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AddUserReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AddUserReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddUserReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSpace();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.AddUserReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.AddUserReq} returns this
 */
proto.AddUserReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.AddUserReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AddUserReq} returns this
 */
proto.AddUserReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.AddUserReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AddUserReq} returns this
 */
proto.AddUserReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.AddUserReq.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.AddUserReq} returns this
 */
proto.AddUserReq.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 space = 5;
 * @return {number}
 */
proto.AddUserReq.prototype.getSpace = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.AddUserReq} returns this
 */
proto.AddUserReq.prototype.setSpace = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.UserInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserInfoReq}
 */
proto.UserInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserInfoReq;
  return proto.UserInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserInfoReq}
 */
proto.UserInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.UserInfoReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserInfoReq} returns this
 */
proto.UserInfoReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.UserInfoReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserInfoReq} returns this
 */
proto.UserInfoReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserInfoResp.prototype.toObject = function(opt_includeInstance) {
  return proto.UserInfoResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserInfoResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserInfoResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    user: (f = msg.getUser()) && proto.User.toObject(includeInstance, f),
    space: (f = msg.getSpace()) && proto.DiskSpace.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserInfoResp}
 */
proto.UserInfoResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserInfoResp;
  return proto.UserInfoResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserInfoResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserInfoResp}
 */
proto.UserInfoResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = new proto.User;
      reader.readMessage(value,proto.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 5:
      var value = new proto.DiskSpace;
      reader.readMessage(value,proto.DiskSpace.deserializeBinaryFromReader);
      msg.setSpace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserInfoResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserInfoResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserInfoResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserInfoResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.User.serializeBinaryToWriter
    );
  }
  f = message.getSpace();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.DiskSpace.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.UserInfoResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserInfoResp} returns this
 */
proto.UserInfoResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.UserInfoResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.UserInfoResp} returns this
 */
proto.UserInfoResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.UserInfoResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserInfoResp} returns this
 */
proto.UserInfoResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional User user = 4;
 * @return {?proto.User}
 */
proto.UserInfoResp.prototype.getUser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, proto.User, 4));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.UserInfoResp} returns this
*/
proto.UserInfoResp.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UserInfoResp} returns this
 */
proto.UserInfoResp.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UserInfoResp.prototype.hasUser = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DiskSpace space = 5;
 * @return {?proto.DiskSpace}
 */
proto.UserInfoResp.prototype.getSpace = function() {
  return /** @type{?proto.DiskSpace} */ (
    jspb.Message.getWrapperField(this, proto.DiskSpace, 5));
};


/**
 * @param {?proto.DiskSpace|undefined} value
 * @return {!proto.UserInfoResp} returns this
*/
proto.UserInfoResp.prototype.setSpace = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UserInfoResp} returns this
 */
proto.UserInfoResp.prototype.clearSpace = function() {
  return this.setSpace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UserInfoResp.prototype.hasSpace = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.UserListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserListReq}
 */
proto.UserListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserListReq;
  return proto.UserListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserListReq}
 */
proto.UserListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.UserListReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserListReq} returns this
 */
proto.UserListReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.UserListReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserListReq} returns this
 */
proto.UserListReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.UserListResp.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.UserListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    userList: jspb.Message.toObjectList(msg.getUserList(),
    proto.User.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserListResp}
 */
proto.UserListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserListResp;
  return proto.UserListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserListResp}
 */
proto.UserListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = new proto.User;
      reader.readMessage(value,proto.User.deserializeBinaryFromReader);
      msg.addUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUserList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.UserListResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserListResp} returns this
 */
proto.UserListResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.UserListResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.UserListResp} returns this
 */
proto.UserListResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.UserListResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserListResp} returns this
 */
proto.UserListResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated User user = 4;
 * @return {!Array<!proto.User>}
 */
proto.UserListResp.prototype.getUserList = function() {
  return /** @type{!Array<!proto.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.User, 4));
};


/**
 * @param {!Array<!proto.User>} value
 * @return {!proto.UserListResp} returns this
*/
proto.UserListResp.prototype.setUserList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.User}
 */
proto.UserListResp.prototype.addUser = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.UserListResp} returns this
 */
proto.UserListResp.prototype.clearUserList = function() {
  return this.setUserList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UpdatePasswordReq.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdatePasswordReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdatePasswordReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdatePasswordReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    oldpass: jspb.Message.getFieldWithDefault(msg, 3, ""),
    newpass: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UpdatePasswordReq}
 */
proto.UpdatePasswordReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdatePasswordReq;
  return proto.UpdatePasswordReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdatePasswordReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdatePasswordReq}
 */
proto.UpdatePasswordReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldpass(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewpass(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UpdatePasswordReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UpdatePasswordReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UpdatePasswordReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdatePasswordReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOldpass();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNewpass();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.UpdatePasswordReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UpdatePasswordReq} returns this
 */
proto.UpdatePasswordReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.UpdatePasswordReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.UpdatePasswordReq} returns this
 */
proto.UpdatePasswordReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string oldPass = 3;
 * @return {string}
 */
proto.UpdatePasswordReq.prototype.getOldpass = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.UpdatePasswordReq} returns this
 */
proto.UpdatePasswordReq.prototype.setOldpass = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string newPass = 4;
 * @return {string}
 */
proto.UpdatePasswordReq.prototype.getNewpass = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.UpdatePasswordReq} returns this
 */
proto.UpdatePasswordReq.prototype.setNewpass = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserRenameReq.prototype.toObject = function(opt_includeInstance) {
  return proto.UserRenameReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserRenameReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserRenameReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserRenameReq}
 */
proto.UserRenameReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserRenameReq;
  return proto.UserRenameReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserRenameReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserRenameReq}
 */
proto.UserRenameReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserRenameReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserRenameReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserRenameReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserRenameReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.UserRenameReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserRenameReq} returns this
 */
proto.UserRenameReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.UserRenameReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserRenameReq} returns this
 */
proto.UserRenameReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.UserRenameReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserRenameReq} returns this
 */
proto.UserRenameReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetUserAvatarReq.prototype.toObject = function(opt_includeInstance) {
  return proto.GetUserAvatarReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetUserAvatarReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetUserAvatarReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetUserAvatarReq}
 */
proto.GetUserAvatarReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetUserAvatarReq;
  return proto.GetUserAvatarReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetUserAvatarReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetUserAvatarReq}
 */
proto.GetUserAvatarReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetUserAvatarReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetUserAvatarReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetUserAvatarReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetUserAvatarReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.GetUserAvatarReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GetUserAvatarReq} returns this
 */
proto.GetUserAvatarReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.GetUserAvatarReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetUserAvatarReq} returns this
 */
proto.GetUserAvatarReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 userId = 3;
 * @return {number}
 */
proto.GetUserAvatarReq.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.GetUserAvatarReq} returns this
 */
proto.GetUserAvatarReq.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetUserAvatarResp.prototype.toObject = function(opt_includeInstance) {
  return proto.GetUserAvatarResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetUserAvatarResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetUserAvatarResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    avatardata: msg.getAvatardata_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetUserAvatarResp}
 */
proto.GetUserAvatarResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetUserAvatarResp;
  return proto.GetUserAvatarResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetUserAvatarResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetUserAvatarResp}
 */
proto.GetUserAvatarResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAvatardata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetUserAvatarResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetUserAvatarResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetUserAvatarResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetUserAvatarResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAvatardata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.GetUserAvatarResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GetUserAvatarResp} returns this
 */
proto.GetUserAvatarResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.GetUserAvatarResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.GetUserAvatarResp} returns this
 */
proto.GetUserAvatarResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.GetUserAvatarResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetUserAvatarResp} returns this
 */
proto.GetUserAvatarResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes avatarData = 4;
 * @return {!(string|Uint8Array)}
 */
proto.GetUserAvatarResp.prototype.getAvatardata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes avatarData = 4;
 * This is a type-conversion wrapper around `getAvatardata()`
 * @return {string}
 */
proto.GetUserAvatarResp.prototype.getAvatardata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAvatardata()));
};


/**
 * optional bytes avatarData = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAvatardata()`
 * @return {!Uint8Array}
 */
proto.GetUserAvatarResp.prototype.getAvatardata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAvatardata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.GetUserAvatarResp} returns this
 */
proto.GetUserAvatarResp.prototype.setAvatardata = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UpdateUserAvatarReq.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdateUserAvatarReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdateUserAvatarReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateUserAvatarReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    avatardata: msg.getAvatardata_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UpdateUserAvatarReq}
 */
proto.UpdateUserAvatarReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdateUserAvatarReq;
  return proto.UpdateUserAvatarReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdateUserAvatarReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdateUserAvatarReq}
 */
proto.UpdateUserAvatarReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAvatardata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UpdateUserAvatarReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UpdateUserAvatarReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UpdateUserAvatarReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateUserAvatarReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvatardata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.UpdateUserAvatarReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UpdateUserAvatarReq} returns this
 */
proto.UpdateUserAvatarReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.UpdateUserAvatarReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.UpdateUserAvatarReq} returns this
 */
proto.UpdateUserAvatarReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes avatarData = 3;
 * @return {!(string|Uint8Array)}
 */
proto.UpdateUserAvatarReq.prototype.getAvatardata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes avatarData = 3;
 * This is a type-conversion wrapper around `getAvatardata()`
 * @return {string}
 */
proto.UpdateUserAvatarReq.prototype.getAvatardata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAvatardata()));
};


/**
 * optional bytes avatarData = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAvatardata()`
 * @return {!Uint8Array}
 */
proto.UpdateUserAvatarReq.prototype.getAvatardata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAvatardata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.UpdateUserAvatarReq} returns this
 */
proto.UpdateUserAvatarReq.prototype.setAvatardata = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ResetPasswordReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ResetPasswordReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ResetPasswordReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ResetPasswordReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    newpass: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ResetPasswordReq}
 */
proto.ResetPasswordReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ResetPasswordReq;
  return proto.ResetPasswordReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ResetPasswordReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ResetPasswordReq}
 */
proto.ResetPasswordReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewpass(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ResetPasswordReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ResetPasswordReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ResetPasswordReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ResetPasswordReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getNewpass();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.ResetPasswordReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ResetPasswordReq} returns this
 */
proto.ResetPasswordReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.ResetPasswordReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ResetPasswordReq} returns this
 */
proto.ResetPasswordReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 userId = 3;
 * @return {number}
 */
proto.ResetPasswordReq.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ResetPasswordReq} returns this
 */
proto.ResetPasswordReq.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string newPass = 4;
 * @return {string}
 */
proto.ResetPasswordReq.prototype.getNewpass = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ResetPasswordReq} returns this
 */
proto.ResetPasswordReq.prototype.setNewpass = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EnableUserReq.prototype.toObject = function(opt_includeInstance) {
  return proto.EnableUserReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EnableUserReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EnableUserReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    enable: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EnableUserReq}
 */
proto.EnableUserReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EnableUserReq;
  return proto.EnableUserReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EnableUserReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EnableUserReq}
 */
proto.EnableUserReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EnableUserReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EnableUserReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EnableUserReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EnableUserReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.EnableUserReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.EnableUserReq} returns this
 */
proto.EnableUserReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.EnableUserReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.EnableUserReq} returns this
 */
proto.EnableUserReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 userId = 3;
 * @return {number}
 */
proto.EnableUserReq.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.EnableUserReq} returns this
 */
proto.EnableUserReq.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool enable = 4;
 * @return {boolean}
 */
proto.EnableUserReq.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.EnableUserReq} returns this
 */
proto.EnableUserReq.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeleteUserReq.prototype.toObject = function(opt_includeInstance) {
  return proto.DeleteUserReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeleteUserReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeleteUserReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeleteUserReq}
 */
proto.DeleteUserReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeleteUserReq;
  return proto.DeleteUserReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeleteUserReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeleteUserReq}
 */
proto.DeleteUserReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeleteUserReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeleteUserReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeleteUserReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeleteUserReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.DeleteUserReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.DeleteUserReq} returns this
 */
proto.DeleteUserReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.DeleteUserReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeleteUserReq} returns this
 */
proto.DeleteUserReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 userId = 3;
 * @return {number}
 */
proto.DeleteUserReq.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.DeleteUserReq} returns this
 */
proto.DeleteUserReq.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ChangeSpaceReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ChangeSpaceReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChangeSpaceReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeSpaceReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    space: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ChangeSpaceReq}
 */
proto.ChangeSpaceReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChangeSpaceReq;
  return proto.ChangeSpaceReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChangeSpaceReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChangeSpaceReq}
 */
proto.ChangeSpaceReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSpace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ChangeSpaceReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChangeSpaceReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChangeSpaceReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeSpaceReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getSpace();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.ChangeSpaceReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ChangeSpaceReq} returns this
 */
proto.ChangeSpaceReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.ChangeSpaceReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ChangeSpaceReq} returns this
 */
proto.ChangeSpaceReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 userId = 3;
 * @return {number}
 */
proto.ChangeSpaceReq.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ChangeSpaceReq} returns this
 */
proto.ChangeSpaceReq.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 space = 4;
 * @return {number}
 */
proto.ChangeSpaceReq.prototype.getSpace = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ChangeSpaceReq} returns this
 */
proto.ChangeSpaceReq.prototype.setSpace = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ScanQrcodeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ScanQrcodeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ScanQrcodeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ScanQrcodeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    qrcode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    peerid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    token: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ScanQrcodeReq}
 */
proto.ScanQrcodeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ScanQrcodeReq;
  return proto.ScanQrcodeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ScanQrcodeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ScanQrcodeReq}
 */
proto.ScanQrcodeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQrcode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ScanQrcodeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ScanQrcodeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ScanQrcodeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ScanQrcodeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getQrcode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.ScanQrcodeReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ScanQrcodeReq} returns this
 */
proto.ScanQrcodeReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string qrcode = 2;
 * @return {string}
 */
proto.ScanQrcodeReq.prototype.getQrcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ScanQrcodeReq} returns this
 */
proto.ScanQrcodeReq.prototype.setQrcode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string peerId = 3;
 * @return {string}
 */
proto.ScanQrcodeReq.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ScanQrcodeReq} returns this
 */
proto.ScanQrcodeReq.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string token = 4;
 * @return {string}
 */
proto.ScanQrcodeReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ScanQrcodeReq} returns this
 */
proto.ScanQrcodeReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetTokenByQrcodeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.GetTokenByQrcodeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetTokenByQrcodeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetTokenByQrcodeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    qrcode: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetTokenByQrcodeReq}
 */
proto.GetTokenByQrcodeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetTokenByQrcodeReq;
  return proto.GetTokenByQrcodeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetTokenByQrcodeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetTokenByQrcodeReq}
 */
proto.GetTokenByQrcodeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQrcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetTokenByQrcodeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetTokenByQrcodeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetTokenByQrcodeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetTokenByQrcodeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getQrcode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.GetTokenByQrcodeReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GetTokenByQrcodeReq} returns this
 */
proto.GetTokenByQrcodeReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string qrcode = 2;
 * @return {string}
 */
proto.GetTokenByQrcodeReq.prototype.getQrcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetTokenByQrcodeReq} returns this
 */
proto.GetTokenByQrcodeReq.prototype.setQrcode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetTokenByQrcodeResp.prototype.toObject = function(opt_includeInstance) {
  return proto.GetTokenByQrcodeResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetTokenByQrcodeResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetTokenByQrcodeResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    token: jspb.Message.getFieldWithDefault(msg, 4, ""),
    peerid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetTokenByQrcodeResp}
 */
proto.GetTokenByQrcodeResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetTokenByQrcodeResp;
  return proto.GetTokenByQrcodeResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetTokenByQrcodeResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetTokenByQrcodeResp}
 */
proto.GetTokenByQrcodeResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetTokenByQrcodeResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetTokenByQrcodeResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetTokenByQrcodeResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetTokenByQrcodeResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.GetTokenByQrcodeResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GetTokenByQrcodeResp} returns this
 */
proto.GetTokenByQrcodeResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.GetTokenByQrcodeResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.GetTokenByQrcodeResp} returns this
 */
proto.GetTokenByQrcodeResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.GetTokenByQrcodeResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetTokenByQrcodeResp} returns this
 */
proto.GetTokenByQrcodeResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string token = 4;
 * @return {string}
 */
proto.GetTokenByQrcodeResp.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetTokenByQrcodeResp} returns this
 */
proto.GetTokenByQrcodeResp.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string peerId = 5;
 * @return {string}
 */
proto.GetTokenByQrcodeResp.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetTokenByQrcodeResp} returns this
 */
proto.GetTokenByQrcodeResp.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileItem.prototype.toObject = function(opt_includeInstance) {
  return proto.FileItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    size: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isfolder: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    createdat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    md5: jspb.Message.getFieldWithDefault(msg, 7, ""),
    star: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    share: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    subfiles: jspb.Message.getFieldWithDefault(msg, 10, 0),
    kind: jspb.Message.getFieldWithDefault(msg, 11, ""),
    sharecount: jspb.Message.getFieldWithDefault(msg, 12, 0),
    ext: jspb.Message.getFieldWithDefault(msg, 13, ""),
    parentid: jspb.Message.getFieldWithDefault(msg, 14, ""),
    parentname: jspb.Message.getFieldWithDefault(msg, 15, ""),
    issystem: jspb.Message.getFieldWithDefault(msg, 16, 0),
    cid: jspb.Message.getFieldWithDefault(msg, 17, ""),
    formdevice: jspb.Message.getFieldWithDefault(msg, 18, ""),
    startat: jspb.Message.getFieldWithDefault(msg, 19, 0),
    endat: jspb.Message.getFieldWithDefault(msg, 20, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileItem}
 */
proto.FileItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileItem;
  return proto.FileItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileItem}
 */
proto.FileItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsfolder(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStar(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShare(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSubfiles(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSharecount(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setExt(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentid(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentname(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIssystem(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormdevice(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartat(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getIsfolder();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStar();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getShare();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getSubfiles();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getSharecount();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getExt();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getParentid();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getParentname();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getIssystem();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getFormdevice();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getStartat();
  if (f !== 0) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = message.getEndat();
  if (f !== 0) {
    writer.writeInt64(
      20,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.FileItem.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.FileItem.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 size = 3;
 * @return {number}
 */
proto.FileItem.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool isFolder = 4;
 * @return {boolean}
 */
proto.FileItem.prototype.getIsfolder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setIsfolder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int64 createdAt = 5;
 * @return {number}
 */
proto.FileItem.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 updatedAt = 6;
 * @return {number}
 */
proto.FileItem.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string md5 = 7;
 * @return {string}
 */
proto.FileItem.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool star = 8;
 * @return {boolean}
 */
proto.FileItem.prototype.getStar = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setStar = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool share = 9;
 * @return {boolean}
 */
proto.FileItem.prototype.getShare = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setShare = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional int32 subFiles = 10;
 * @return {number}
 */
proto.FileItem.prototype.getSubfiles = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setSubfiles = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string kind = 11;
 * @return {string}
 */
proto.FileItem.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 shareCount = 12;
 * @return {number}
 */
proto.FileItem.prototype.getSharecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setSharecount = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string ext = 13;
 * @return {string}
 */
proto.FileItem.prototype.getExt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setExt = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string parentId = 14;
 * @return {string}
 */
proto.FileItem.prototype.getParentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setParentid = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string parentName = 15;
 * @return {string}
 */
proto.FileItem.prototype.getParentname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setParentname = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional int32 isSystem = 16;
 * @return {number}
 */
proto.FileItem.prototype.getIssystem = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setIssystem = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional string cid = 17;
 * @return {string}
 */
proto.FileItem.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string formDevice = 18;
 * @return {string}
 */
proto.FileItem.prototype.getFormdevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setFormdevice = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional int64 startAt = 19;
 * @return {number}
 */
proto.FileItem.prototype.getStartat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setStartat = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional int64 endAt = 20;
 * @return {number}
 */
proto.FileItem.prototype.getEndat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileItem} returns this
 */
proto.FileItem.prototype.setEndat = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NewFolderReq.prototype.toObject = function(opt_includeInstance) {
  return proto.NewFolderReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NewFolderReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewFolderReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    parentid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    issystem: jspb.Message.getFieldWithDefault(msg, 6, 0),
    formdevice: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NewFolderReq}
 */
proto.NewFolderReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NewFolderReq;
  return proto.NewFolderReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NewFolderReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NewFolderReq}
 */
proto.NewFolderReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIssystem(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormdevice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NewFolderReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NewFolderReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NewFolderReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewFolderReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getParentid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIssystem();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getFormdevice();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.NewFolderReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.NewFolderReq} returns this
 */
proto.NewFolderReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.NewFolderReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.NewFolderReq} returns this
 */
proto.NewFolderReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.NewFolderReq.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.NewFolderReq} returns this
 */
proto.NewFolderReq.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.NewFolderReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.NewFolderReq} returns this
 */
proto.NewFolderReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string parentId = 5;
 * @return {string}
 */
proto.NewFolderReq.prototype.getParentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.NewFolderReq} returns this
 */
proto.NewFolderReq.prototype.setParentid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 isSystem = 6;
 * @return {number}
 */
proto.NewFolderReq.prototype.getIssystem = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.NewFolderReq} returns this
 */
proto.NewFolderReq.prototype.setIssystem = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string formDevice = 7;
 * @return {string}
 */
proto.NewFolderReq.prototype.getFormdevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.NewFolderReq} returns this
 */
proto.NewFolderReq.prototype.setFormdevice = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NewFolderResp.prototype.toObject = function(opt_includeInstance) {
  return proto.NewFolderResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NewFolderResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewFolderResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NewFolderResp}
 */
proto.NewFolderResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NewFolderResp;
  return proto.NewFolderResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NewFolderResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NewFolderResp}
 */
proto.NewFolderResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NewFolderResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NewFolderResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NewFolderResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewFolderResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.NewFolderResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.NewFolderResp} returns this
 */
proto.NewFolderResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.NewFolderResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.NewFolderResp} returns this
 */
proto.NewFolderResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.NewFolderResp.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.NewFolderResp} returns this
 */
proto.NewFolderResp.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UploadFileReq.prototype.toObject = function(opt_includeInstance) {
  return proto.UploadFileReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UploadFileReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UploadFileReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 4, ""),
    parentid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    size: jspb.Message.getFieldWithDefault(msg, 6, 0),
    bytesFrom: jspb.Message.getFieldWithDefault(msg, 7, 0),
    data: msg.getData_asB64(),
    md5: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UploadFileReq}
 */
proto.UploadFileReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UploadFileReq;
  return proto.UploadFileReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UploadFileReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UploadFileReq}
 */
proto.UploadFileReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBytesFrom(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UploadFileReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UploadFileReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UploadFileReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UploadFileReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getParentid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getBytesFrom();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.UploadFileReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UploadFileReq} returns this
 */
proto.UploadFileReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.UploadFileReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.UploadFileReq} returns this
 */
proto.UploadFileReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.UploadFileReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.UploadFileReq} returns this
 */
proto.UploadFileReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string id = 4;
 * @return {string}
 */
proto.UploadFileReq.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.UploadFileReq} returns this
 */
proto.UploadFileReq.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string parentId = 5;
 * @return {string}
 */
proto.UploadFileReq.prototype.getParentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.UploadFileReq} returns this
 */
proto.UploadFileReq.prototype.setParentid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 size = 6;
 * @return {number}
 */
proto.UploadFileReq.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.UploadFileReq} returns this
 */
proto.UploadFileReq.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 bytes_from = 7;
 * @return {number}
 */
proto.UploadFileReq.prototype.getBytesFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.UploadFileReq} returns this
 */
proto.UploadFileReq.prototype.setBytesFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bytes data = 8;
 * @return {!(string|Uint8Array)}
 */
proto.UploadFileReq.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes data = 8;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.UploadFileReq.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.UploadFileReq.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.UploadFileReq} returns this
 */
proto.UploadFileReq.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional string md5 = 9;
 * @return {string}
 */
proto.UploadFileReq.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.UploadFileReq} returns this
 */
proto.UploadFileReq.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DownloadFileReq.prototype.toObject = function(opt_includeInstance) {
  return proto.DownloadFileReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DownloadFileReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DownloadFileReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    bytesFrom: jspb.Message.getFieldWithDefault(msg, 4, 0),
    bytesCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    userid: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DownloadFileReq}
 */
proto.DownloadFileReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DownloadFileReq;
  return proto.DownloadFileReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DownloadFileReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DownloadFileReq}
 */
proto.DownloadFileReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBytesFrom(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBytesCount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DownloadFileReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DownloadFileReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DownloadFileReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DownloadFileReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBytesFrom();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getBytesCount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.DownloadFileReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.DownloadFileReq} returns this
 */
proto.DownloadFileReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.DownloadFileReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.DownloadFileReq} returns this
 */
proto.DownloadFileReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string fileId = 3;
 * @return {string}
 */
proto.DownloadFileReq.prototype.getFileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.DownloadFileReq} returns this
 */
proto.DownloadFileReq.prototype.setFileid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 bytes_from = 4;
 * @return {number}
 */
proto.DownloadFileReq.prototype.getBytesFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.DownloadFileReq} returns this
 */
proto.DownloadFileReq.prototype.setBytesFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 bytes_count = 5;
 * @return {number}
 */
proto.DownloadFileReq.prototype.getBytesCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.DownloadFileReq} returns this
 */
proto.DownloadFileReq.prototype.setBytesCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 userId = 6;
 * @return {number}
 */
proto.DownloadFileReq.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.DownloadFileReq} returns this
 */
proto.DownloadFileReq.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DownloadFileResp.prototype.toObject = function(opt_includeInstance) {
  return proto.DownloadFileResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DownloadFileResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DownloadFileResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    filesize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DownloadFileResp}
 */
proto.DownloadFileResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DownloadFileResp;
  return proto.DownloadFileResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DownloadFileResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DownloadFileResp}
 */
proto.DownloadFileResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFilesize(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DownloadFileResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DownloadFileResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DownloadFileResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DownloadFileResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFilesize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.DownloadFileResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.DownloadFileResp} returns this
 */
proto.DownloadFileResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.DownloadFileResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.DownloadFileResp} returns this
 */
proto.DownloadFileResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.DownloadFileResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.DownloadFileResp} returns this
 */
proto.DownloadFileResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.DownloadFileResp.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.DownloadFileResp} returns this
 */
proto.DownloadFileResp.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 fileSize = 5;
 * @return {number}
 */
proto.DownloadFileResp.prototype.getFilesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.DownloadFileResp} returns this
 */
proto.DownloadFileResp.prototype.setFilesize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bytes data = 6;
 * @return {!(string|Uint8Array)}
 */
proto.DownloadFileResp.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes data = 6;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.DownloadFileResp.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.DownloadFileResp.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.DownloadFileResp} returns this
 */
proto.DownloadFileResp.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.FileListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parentid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    dirmask: jspb.Message.getFieldWithDefault(msg, 4, 0),
    filetype: jspb.Message.getFieldWithDefault(msg, 5, 0),
    starmask: jspb.Message.getFieldWithDefault(msg, 6, 0),
    keyword: jspb.Message.getFieldWithDefault(msg, 7, ""),
    order: jspb.Message.getFieldWithDefault(msg, 8, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 9, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 10, 0),
    isequal: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileListReq}
 */
proto.FileListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileListReq;
  return proto.FileListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileListReq}
 */
proto.FileListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDirmask(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFiletype(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStarmask(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyword(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrder(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsequal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParentid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDirmask();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getFiletype();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getStarmask();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getKeyword();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getIsequal();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileListReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileListReq} returns this
 */
proto.FileListReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.FileListReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileListReq} returns this
 */
proto.FileListReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string parentId = 3;
 * @return {string}
 */
proto.FileListReq.prototype.getParentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileListReq} returns this
 */
proto.FileListReq.prototype.setParentid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 dirMask = 4;
 * @return {number}
 */
proto.FileListReq.prototype.getDirmask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileListReq} returns this
 */
proto.FileListReq.prototype.setDirmask = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 fileType = 5;
 * @return {number}
 */
proto.FileListReq.prototype.getFiletype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileListReq} returns this
 */
proto.FileListReq.prototype.setFiletype = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 starMask = 6;
 * @return {number}
 */
proto.FileListReq.prototype.getStarmask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileListReq} returns this
 */
proto.FileListReq.prototype.setStarmask = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string keyword = 7;
 * @return {string}
 */
proto.FileListReq.prototype.getKeyword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileListReq} returns this
 */
proto.FileListReq.prototype.setKeyword = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 order = 8;
 * @return {number}
 */
proto.FileListReq.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileListReq} returns this
 */
proto.FileListReq.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 offset = 9;
 * @return {number}
 */
proto.FileListReq.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileListReq} returns this
 */
proto.FileListReq.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 limit = 10;
 * @return {number}
 */
proto.FileListReq.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileListReq} returns this
 */
proto.FileListReq.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 isEqual = 11;
 * @return {number}
 */
proto.FileListReq.prototype.getIsequal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileListReq} returns this
 */
proto.FileListReq.prototype.setIsequal = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.FileListResp.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.FileListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0),
    filesList: jspb.Message.toObjectList(msg.getFilesList(),
    proto.FileItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileListResp}
 */
proto.FileListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileListResp;
  return proto.FileListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileListResp}
 */
proto.FileListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 5:
      var value = new proto.FileItem;
      reader.readMessage(value,proto.FileItem.deserializeBinaryFromReader);
      msg.addFiles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.FileItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileListResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileListResp} returns this
 */
proto.FileListResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.FileListResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.FileListResp} returns this
 */
proto.FileListResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.FileListResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileListResp} returns this
 */
proto.FileListResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total = 4;
 * @return {number}
 */
proto.FileListResp.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileListResp} returns this
 */
proto.FileListResp.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated FileItem files = 5;
 * @return {!Array<!proto.FileItem>}
 */
proto.FileListResp.prototype.getFilesList = function() {
  return /** @type{!Array<!proto.FileItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.FileItem, 5));
};


/**
 * @param {!Array<!proto.FileItem>} value
 * @return {!proto.FileListResp} returns this
*/
proto.FileListResp.prototype.setFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.FileItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.FileItem}
 */
proto.FileListResp.prototype.addFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.FileItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.FileListResp} returns this
 */
proto.FileListResp.prototype.clearFilesList = function() {
  return this.setFilesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileRenameReq.prototype.toObject = function(opt_includeInstance) {
  return proto.FileRenameReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileRenameReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileRenameReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    parentid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileRenameReq}
 */
proto.FileRenameReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileRenameReq;
  return proto.FileRenameReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileRenameReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileRenameReq}
 */
proto.FileRenameReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileRenameReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileRenameReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileRenameReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileRenameReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getParentid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileRenameReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileRenameReq} returns this
 */
proto.FileRenameReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.FileRenameReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileRenameReq} returns this
 */
proto.FileRenameReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string fileId = 3;
 * @return {string}
 */
proto.FileRenameReq.prototype.getFileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileRenameReq} returns this
 */
proto.FileRenameReq.prototype.setFileid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.FileRenameReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileRenameReq} returns this
 */
proto.FileRenameReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string parentId = 5;
 * @return {string}
 */
proto.FileRenameReq.prototype.getParentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileRenameReq} returns this
 */
proto.FileRenameReq.prototype.setParentid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.FileDeleteReq.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileDeleteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.FileDeleteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileDeleteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileDeleteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileidsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileDeleteReq}
 */
proto.FileDeleteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileDeleteReq;
  return proto.FileDeleteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileDeleteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileDeleteReq}
 */
proto.FileDeleteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFileids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileDeleteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileDeleteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileDeleteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileDeleteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileDeleteReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileDeleteReq} returns this
 */
proto.FileDeleteReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.FileDeleteReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileDeleteReq} returns this
 */
proto.FileDeleteReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string fileIds = 3;
 * @return {!Array<string>}
 */
proto.FileDeleteReq.prototype.getFileidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.FileDeleteReq} returns this
 */
proto.FileDeleteReq.prototype.setFileidsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.FileDeleteReq} returns this
 */
proto.FileDeleteReq.prototype.addFileids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.FileDeleteReq} returns this
 */
proto.FileDeleteReq.prototype.clearFileidsList = function() {
  return this.setFileidsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileMoveReq.prototype.toObject = function(opt_includeInstance) {
  return proto.FileMoveReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileMoveReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileMoveReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    newparentid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileMoveReq}
 */
proto.FileMoveReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileMoveReq;
  return proto.FileMoveReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileMoveReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileMoveReq}
 */
proto.FileMoveReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewparentid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileMoveReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileMoveReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileMoveReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileMoveReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNewparentid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileMoveReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileMoveReq} returns this
 */
proto.FileMoveReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.FileMoveReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileMoveReq} returns this
 */
proto.FileMoveReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string fileId = 3;
 * @return {string}
 */
proto.FileMoveReq.prototype.getFileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileMoveReq} returns this
 */
proto.FileMoveReq.prototype.setFileid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string newParentId = 4;
 * @return {string}
 */
proto.FileMoveReq.prototype.getNewparentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileMoveReq} returns this
 */
proto.FileMoveReq.prototype.setNewparentid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileCopyReq.prototype.toObject = function(opt_includeInstance) {
  return proto.FileCopyReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileCopyReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileCopyReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    newparentid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    newfileid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    newfilename: jspb.Message.getFieldWithDefault(msg, 6, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileCopyReq}
 */
proto.FileCopyReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileCopyReq;
  return proto.FileCopyReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileCopyReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileCopyReq}
 */
proto.FileCopyReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewparentid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewfileid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewfilename(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileCopyReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileCopyReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileCopyReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileCopyReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNewparentid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNewfileid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNewfilename();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileCopyReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileCopyReq} returns this
 */
proto.FileCopyReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.FileCopyReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileCopyReq} returns this
 */
proto.FileCopyReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string fileId = 3;
 * @return {string}
 */
proto.FileCopyReq.prototype.getFileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileCopyReq} returns this
 */
proto.FileCopyReq.prototype.setFileid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string newParentId = 4;
 * @return {string}
 */
proto.FileCopyReq.prototype.getNewparentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileCopyReq} returns this
 */
proto.FileCopyReq.prototype.setNewparentid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string newFileId = 5;
 * @return {string}
 */
proto.FileCopyReq.prototype.getNewfileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileCopyReq} returns this
 */
proto.FileCopyReq.prototype.setNewfileid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string newFileName = 6;
 * @return {string}
 */
proto.FileCopyReq.prototype.getNewfilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileCopyReq} returns this
 */
proto.FileCopyReq.prototype.setNewfilename = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 userId = 7;
 * @return {number}
 */
proto.FileCopyReq.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileCopyReq} returns this
 */
proto.FileCopyReq.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.FileStarReq.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileStarReq.prototype.toObject = function(opt_includeInstance) {
  return proto.FileStarReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileStarReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileStarReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileidsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileStarReq}
 */
proto.FileStarReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileStarReq;
  return proto.FileStarReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileStarReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileStarReq}
 */
proto.FileStarReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFileids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileStarReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileStarReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileStarReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileStarReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileStarReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileStarReq} returns this
 */
proto.FileStarReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.FileStarReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileStarReq} returns this
 */
proto.FileStarReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string fileIds = 3;
 * @return {!Array<string>}
 */
proto.FileStarReq.prototype.getFileidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.FileStarReq} returns this
 */
proto.FileStarReq.prototype.setFileidsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.FileStarReq} returns this
 */
proto.FileStarReq.prototype.addFileids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.FileStarReq} returns this
 */
proto.FileStarReq.prototype.clearFileidsList = function() {
  return this.setFileidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.FileUnstarReq.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileUnstarReq.prototype.toObject = function(opt_includeInstance) {
  return proto.FileUnstarReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileUnstarReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileUnstarReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileidsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileUnstarReq}
 */
proto.FileUnstarReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileUnstarReq;
  return proto.FileUnstarReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileUnstarReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileUnstarReq}
 */
proto.FileUnstarReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFileids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileUnstarReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileUnstarReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileUnstarReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileUnstarReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileUnstarReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileUnstarReq} returns this
 */
proto.FileUnstarReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.FileUnstarReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileUnstarReq} returns this
 */
proto.FileUnstarReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string fileIds = 3;
 * @return {!Array<string>}
 */
proto.FileUnstarReq.prototype.getFileidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.FileUnstarReq} returns this
 */
proto.FileUnstarReq.prototype.setFileidsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.FileUnstarReq} returns this
 */
proto.FileUnstarReq.prototype.addFileids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.FileUnstarReq} returns this
 */
proto.FileUnstarReq.prototype.clearFileidsList = function() {
  return this.setFileidsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RecycleItem.prototype.toObject = function(opt_includeInstance) {
  return proto.RecycleItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RecycleItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecycleItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fileid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, 0),
    isfolder: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    createdat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    ext: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RecycleItem}
 */
proto.RecycleItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RecycleItem;
  return proto.RecycleItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RecycleItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RecycleItem}
 */
proto.RecycleItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsfolder(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setExt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RecycleItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RecycleItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RecycleItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecycleItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getIsfolder();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getExt();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.RecycleItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecycleItem} returns this
 */
proto.RecycleItem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string fileId = 2;
 * @return {string}
 */
proto.RecycleItem.prototype.getFileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.RecycleItem} returns this
 */
proto.RecycleItem.prototype.setFileid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.RecycleItem.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.RecycleItem} returns this
 */
proto.RecycleItem.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 size = 4;
 * @return {number}
 */
proto.RecycleItem.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecycleItem} returns this
 */
proto.RecycleItem.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool isFolder = 5;
 * @return {boolean}
 */
proto.RecycleItem.prototype.getIsfolder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.RecycleItem} returns this
 */
proto.RecycleItem.prototype.setIsfolder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional int64 createdAt = 6;
 * @return {number}
 */
proto.RecycleItem.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecycleItem} returns this
 */
proto.RecycleItem.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string ext = 7;
 * @return {string}
 */
proto.RecycleItem.prototype.getExt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.RecycleItem} returns this
 */
proto.RecycleItem.prototype.setExt = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RecycleListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.RecycleListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RecycleListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecycleListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    order: jspb.Message.getFieldWithDefault(msg, 3, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 4, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 5, 0),
    keyword: jspb.Message.getFieldWithDefault(msg, 7, ""),
    filetype: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RecycleListReq}
 */
proto.RecycleListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RecycleListReq;
  return proto.RecycleListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RecycleListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RecycleListReq}
 */
proto.RecycleListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrder(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyword(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFiletype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RecycleListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RecycleListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RecycleListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecycleListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getKeyword();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFiletype();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.RecycleListReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecycleListReq} returns this
 */
proto.RecycleListReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.RecycleListReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.RecycleListReq} returns this
 */
proto.RecycleListReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 order = 3;
 * @return {number}
 */
proto.RecycleListReq.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecycleListReq} returns this
 */
proto.RecycleListReq.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 offset = 4;
 * @return {number}
 */
proto.RecycleListReq.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecycleListReq} returns this
 */
proto.RecycleListReq.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 limit = 5;
 * @return {number}
 */
proto.RecycleListReq.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecycleListReq} returns this
 */
proto.RecycleListReq.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string keyword = 7;
 * @return {string}
 */
proto.RecycleListReq.prototype.getKeyword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.RecycleListReq} returns this
 */
proto.RecycleListReq.prototype.setKeyword = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 fileType = 8;
 * @return {number}
 */
proto.RecycleListReq.prototype.getFiletype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecycleListReq} returns this
 */
proto.RecycleListReq.prototype.setFiletype = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RecycleListResp.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RecycleListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.RecycleListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RecycleListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecycleListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.RecycleItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RecycleListResp}
 */
proto.RecycleListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RecycleListResp;
  return proto.RecycleListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RecycleListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RecycleListResp}
 */
proto.RecycleListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 5:
      var value = new proto.RecycleItem;
      reader.readMessage(value,proto.RecycleItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RecycleListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RecycleListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RecycleListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecycleListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.RecycleItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.RecycleListResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecycleListResp} returns this
 */
proto.RecycleListResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.RecycleListResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.RecycleListResp} returns this
 */
proto.RecycleListResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.RecycleListResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.RecycleListResp} returns this
 */
proto.RecycleListResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total = 4;
 * @return {number}
 */
proto.RecycleListResp.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecycleListResp} returns this
 */
proto.RecycleListResp.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated RecycleItem items = 5;
 * @return {!Array<!proto.RecycleItem>}
 */
proto.RecycleListResp.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.RecycleItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.RecycleItem, 5));
};


/**
 * @param {!Array<!proto.RecycleItem>} value
 * @return {!proto.RecycleListResp} returns this
*/
proto.RecycleListResp.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.RecycleItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.RecycleItem}
 */
proto.RecycleListResp.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.RecycleItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RecycleListResp} returns this
 */
proto.RecycleListResp.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RecycleDeleteReq.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RecycleDeleteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.RecycleDeleteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RecycleDeleteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecycleDeleteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    idsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RecycleDeleteReq}
 */
proto.RecycleDeleteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RecycleDeleteReq;
  return proto.RecycleDeleteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RecycleDeleteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RecycleDeleteReq}
 */
proto.RecycleDeleteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIds(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RecycleDeleteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RecycleDeleteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RecycleDeleteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecycleDeleteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.RecycleDeleteReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecycleDeleteReq} returns this
 */
proto.RecycleDeleteReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.RecycleDeleteReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.RecycleDeleteReq} returns this
 */
proto.RecycleDeleteReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated int32 ids = 3;
 * @return {!Array<number>}
 */
proto.RecycleDeleteReq.prototype.getIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.RecycleDeleteReq} returns this
 */
proto.RecycleDeleteReq.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.RecycleDeleteReq} returns this
 */
proto.RecycleDeleteReq.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RecycleDeleteReq} returns this
 */
proto.RecycleDeleteReq.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RecycleRestoreReq.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RecycleRestoreReq.prototype.toObject = function(opt_includeInstance) {
  return proto.RecycleRestoreReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RecycleRestoreReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecycleRestoreReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    idsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RecycleRestoreReq}
 */
proto.RecycleRestoreReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RecycleRestoreReq;
  return proto.RecycleRestoreReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RecycleRestoreReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RecycleRestoreReq}
 */
proto.RecycleRestoreReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIds(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RecycleRestoreReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RecycleRestoreReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RecycleRestoreReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecycleRestoreReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.RecycleRestoreReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecycleRestoreReq} returns this
 */
proto.RecycleRestoreReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.RecycleRestoreReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.RecycleRestoreReq} returns this
 */
proto.RecycleRestoreReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated int32 ids = 3;
 * @return {!Array<number>}
 */
proto.RecycleRestoreReq.prototype.getIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.RecycleRestoreReq} returns this
 */
proto.RecycleRestoreReq.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.RecycleRestoreReq} returns this
 */
proto.RecycleRestoreReq.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RecycleRestoreReq} returns this
 */
proto.RecycleRestoreReq.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.FileShareReq.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileShareReq.prototype.toObject = function(opt_includeInstance) {
  return proto.FileShareReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileShareReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileShareReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileidsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    useridlist: jspb.Message.getFieldWithDefault(msg, 4, ""),
    startat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    endat: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileShareReq}
 */
proto.FileShareReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileShareReq;
  return proto.FileShareReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileShareReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileShareReq}
 */
proto.FileShareReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFileids(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseridlist(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileShareReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileShareReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileShareReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileShareReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getUseridlist();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStartat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getEndat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileShareReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileShareReq} returns this
 */
proto.FileShareReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.FileShareReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileShareReq} returns this
 */
proto.FileShareReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string fileIds = 3;
 * @return {!Array<string>}
 */
proto.FileShareReq.prototype.getFileidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.FileShareReq} returns this
 */
proto.FileShareReq.prototype.setFileidsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.FileShareReq} returns this
 */
proto.FileShareReq.prototype.addFileids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.FileShareReq} returns this
 */
proto.FileShareReq.prototype.clearFileidsList = function() {
  return this.setFileidsList([]);
};


/**
 * optional string userIdList = 4;
 * @return {string}
 */
proto.FileShareReq.prototype.getUseridlist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileShareReq} returns this
 */
proto.FileShareReq.prototype.setUseridlist = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 startAt = 5;
 * @return {number}
 */
proto.FileShareReq.prototype.getStartat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileShareReq} returns this
 */
proto.FileShareReq.prototype.setStartat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 endAt = 6;
 * @return {number}
 */
proto.FileShareReq.prototype.getEndat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileShareReq} returns this
 */
proto.FileShareReq.prototype.setEndat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.FileUnShareReq.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileUnShareReq.prototype.toObject = function(opt_includeInstance) {
  return proto.FileUnShareReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileUnShareReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileUnShareReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileidsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileUnShareReq}
 */
proto.FileUnShareReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileUnShareReq;
  return proto.FileUnShareReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileUnShareReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileUnShareReq}
 */
proto.FileUnShareReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFileids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileUnShareReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileUnShareReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileUnShareReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileUnShareReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileUnShareReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileUnShareReq} returns this
 */
proto.FileUnShareReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.FileUnShareReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileUnShareReq} returns this
 */
proto.FileUnShareReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string fileIds = 3;
 * @return {!Array<string>}
 */
proto.FileUnShareReq.prototype.getFileidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.FileUnShareReq} returns this
 */
proto.FileUnShareReq.prototype.setFileidsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.FileUnShareReq} returns this
 */
proto.FileUnShareReq.prototype.addFileids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.FileUnShareReq} returns this
 */
proto.FileUnShareReq.prototype.clearFileidsList = function() {
  return this.setFileidsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileCloseShareReq.prototype.toObject = function(opt_includeInstance) {
  return proto.FileCloseShareReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileCloseShareReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileCloseShareReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileCloseShareReq}
 */
proto.FileCloseShareReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileCloseShareReq;
  return proto.FileCloseShareReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileCloseShareReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileCloseShareReq}
 */
proto.FileCloseShareReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileCloseShareReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileCloseShareReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileCloseShareReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileCloseShareReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileCloseShareReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileCloseShareReq} returns this
 */
proto.FileCloseShareReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.FileCloseShareReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileCloseShareReq} returns this
 */
proto.FileCloseShareReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 userId = 3;
 * @return {number}
 */
proto.FileCloseShareReq.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileCloseShareReq} returns this
 */
proto.FileCloseShareReq.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ShareListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ShareListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ShareListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ShareListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    username: jspb.Message.getFieldWithDefault(msg, 4, ""),
    parentid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    dirmask: jspb.Message.getFieldWithDefault(msg, 6, 0),
    filetype: jspb.Message.getFieldWithDefault(msg, 7, 0),
    starmask: jspb.Message.getFieldWithDefault(msg, 8, 0),
    keyword: jspb.Message.getFieldWithDefault(msg, 9, ""),
    order: jspb.Message.getFieldWithDefault(msg, 10, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 11, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 12, 0),
    ext: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ShareListReq}
 */
proto.ShareListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ShareListReq;
  return proto.ShareListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ShareListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ShareListReq}
 */
proto.ShareListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDirmask(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFiletype(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStarmask(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyword(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrder(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setExt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ShareListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ShareListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ShareListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ShareListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getParentid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDirmask();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getFiletype();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getStarmask();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getKeyword();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getExt();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.ShareListReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareListReq} returns this
 */
proto.ShareListReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.ShareListReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ShareListReq} returns this
 */
proto.ShareListReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 userId = 3;
 * @return {number}
 */
proto.ShareListReq.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareListReq} returns this
 */
proto.ShareListReq.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string userName = 4;
 * @return {string}
 */
proto.ShareListReq.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ShareListReq} returns this
 */
proto.ShareListReq.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string parentId = 5;
 * @return {string}
 */
proto.ShareListReq.prototype.getParentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ShareListReq} returns this
 */
proto.ShareListReq.prototype.setParentid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 dirMask = 6;
 * @return {number}
 */
proto.ShareListReq.prototype.getDirmask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareListReq} returns this
 */
proto.ShareListReq.prototype.setDirmask = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 fileType = 7;
 * @return {number}
 */
proto.ShareListReq.prototype.getFiletype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareListReq} returns this
 */
proto.ShareListReq.prototype.setFiletype = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 starMask = 8;
 * @return {number}
 */
proto.ShareListReq.prototype.getStarmask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareListReq} returns this
 */
proto.ShareListReq.prototype.setStarmask = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string keyword = 9;
 * @return {string}
 */
proto.ShareListReq.prototype.getKeyword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ShareListReq} returns this
 */
proto.ShareListReq.prototype.setKeyword = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 order = 10;
 * @return {number}
 */
proto.ShareListReq.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareListReq} returns this
 */
proto.ShareListReq.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 offset = 11;
 * @return {number}
 */
proto.ShareListReq.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareListReq} returns this
 */
proto.ShareListReq.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 limit = 12;
 * @return {number}
 */
proto.ShareListReq.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareListReq} returns this
 */
proto.ShareListReq.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string ext = 13;
 * @return {string}
 */
proto.ShareListReq.prototype.getExt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ShareListReq} returns this
 */
proto.ShareListReq.prototype.setExt = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ShareItem.prototype.toObject = function(opt_includeInstance) {
  return proto.ShareItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ShareItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ShareItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fileid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, 0),
    isfolder: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    filetype: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 7, 0),
    username: jspb.Message.getFieldWithDefault(msg, 8, ""),
    endat: jspb.Message.getFieldWithDefault(msg, 9, 0),
    countpeople: jspb.Message.getFieldWithDefault(msg, 10, 0),
    ext: jspb.Message.getFieldWithDefault(msg, 11, ""),
    share: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    md5: jspb.Message.getFieldWithDefault(msg, 13, ""),
    parentid: jspb.Message.getFieldWithDefault(msg, 14, ""),
    subfiles: jspb.Message.getFieldWithDefault(msg, 16, 0),
    cid: jspb.Message.getFieldWithDefault(msg, 17, ""),
    startat: jspb.Message.getFieldWithDefault(msg, 18, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ShareItem}
 */
proto.ShareItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ShareItem;
  return proto.ShareItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ShareItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ShareItem}
 */
proto.ShareItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsfolder(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFiletype(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndat(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCountpeople(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setExt(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShare(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentid(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSubfiles(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ShareItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ShareItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ShareItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ShareItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getIsfolder();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getFiletype();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getEndat();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getCountpeople();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getExt();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getShare();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getParentid();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getSubfiles();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getStartat();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ShareItem.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fileId = 2;
 * @return {string}
 */
proto.ShareItem.prototype.getFileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setFileid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ShareItem.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 size = 4;
 * @return {number}
 */
proto.ShareItem.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool isFolder = 5;
 * @return {boolean}
 */
proto.ShareItem.prototype.getIsfolder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setIsfolder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string fileType = 6;
 * @return {string}
 */
proto.ShareItem.prototype.getFiletype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setFiletype = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 createdAt = 7;
 * @return {number}
 */
proto.ShareItem.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string userName = 8;
 * @return {string}
 */
proto.ShareItem.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 endAt = 9;
 * @return {number}
 */
proto.ShareItem.prototype.getEndat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setEndat = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 countPeople = 10;
 * @return {number}
 */
proto.ShareItem.prototype.getCountpeople = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setCountpeople = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string ext = 11;
 * @return {string}
 */
proto.ShareItem.prototype.getExt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setExt = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool share = 12;
 * @return {boolean}
 */
proto.ShareItem.prototype.getShare = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setShare = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional string md5 = 13;
 * @return {string}
 */
proto.ShareItem.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string parentId = 14;
 * @return {string}
 */
proto.ShareItem.prototype.getParentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setParentid = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional int32 subFiles = 16;
 * @return {number}
 */
proto.ShareItem.prototype.getSubfiles = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setSubfiles = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional string cid = 17;
 * @return {string}
 */
proto.ShareItem.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional int64 startAt = 18;
 * @return {number}
 */
proto.ShareItem.prototype.getStartat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareItem} returns this
 */
proto.ShareItem.prototype.setStartat = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ShareListResp.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ShareListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.ShareListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ShareListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ShareListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.ShareItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ShareListResp}
 */
proto.ShareListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ShareListResp;
  return proto.ShareListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ShareListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ShareListResp}
 */
proto.ShareListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 5:
      var value = new proto.ShareItem;
      reader.readMessage(value,proto.ShareItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ShareListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ShareListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ShareListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ShareListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.ShareItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.ShareListResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareListResp} returns this
 */
proto.ShareListResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.ShareListResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.ShareListResp} returns this
 */
proto.ShareListResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.ShareListResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ShareListResp} returns this
 */
proto.ShareListResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total = 4;
 * @return {number}
 */
proto.ShareListResp.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ShareListResp} returns this
 */
proto.ShareListResp.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated ShareItem items = 5;
 * @return {!Array<!proto.ShareItem>}
 */
proto.ShareListResp.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.ShareItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ShareItem, 5));
};


/**
 * @param {!Array<!proto.ShareItem>} value
 * @return {!proto.ShareListResp} returns this
*/
proto.ShareListResp.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.ShareItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ShareItem}
 */
proto.ShareListResp.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.ShareItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ShareListResp} returns this
 */
proto.ShareListResp.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserShareListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.UserShareListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserShareListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserShareListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    keyword: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserShareListReq}
 */
proto.UserShareListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserShareListReq;
  return proto.UserShareListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserShareListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserShareListReq}
 */
proto.UserShareListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserShareListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserShareListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserShareListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserShareListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKeyword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.UserShareListReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserShareListReq} returns this
 */
proto.UserShareListReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.UserShareListReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserShareListReq} returns this
 */
proto.UserShareListReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string keyword = 3;
 * @return {string}
 */
proto.UserShareListReq.prototype.getKeyword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserShareListReq} returns this
 */
proto.UserShareListReq.prototype.setKeyword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserShareItem.prototype.toObject = function(opt_includeInstance) {
  return proto.UserShareItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserShareItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserShareItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fileid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    username: jspb.Message.getFieldWithDefault(msg, 4, ""),
    foldercount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    filecount: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserShareItem}
 */
proto.UserShareItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserShareItem;
  return proto.UserShareItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserShareItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserShareItem}
 */
proto.UserShareItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFoldercount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFilecount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserShareItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserShareItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserShareItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserShareItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFoldercount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getFilecount();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.UserShareItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserShareItem} returns this
 */
proto.UserShareItem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string fileId = 2;
 * @return {string}
 */
proto.UserShareItem.prototype.getFileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserShareItem} returns this
 */
proto.UserShareItem.prototype.setFileid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 userId = 3;
 * @return {number}
 */
proto.UserShareItem.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserShareItem} returns this
 */
proto.UserShareItem.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string userName = 4;
 * @return {string}
 */
proto.UserShareItem.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserShareItem} returns this
 */
proto.UserShareItem.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 folderCount = 5;
 * @return {number}
 */
proto.UserShareItem.prototype.getFoldercount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserShareItem} returns this
 */
proto.UserShareItem.prototype.setFoldercount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 fileCount = 6;
 * @return {number}
 */
proto.UserShareItem.prototype.getFilecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserShareItem} returns this
 */
proto.UserShareItem.prototype.setFilecount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.UserShareListResp.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserShareListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.UserShareListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserShareListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserShareListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.UserShareItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserShareListResp}
 */
proto.UserShareListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserShareListResp;
  return proto.UserShareListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserShareListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserShareListResp}
 */
proto.UserShareListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 5:
      var value = new proto.UserShareItem;
      reader.readMessage(value,proto.UserShareItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserShareListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserShareListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserShareListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserShareListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.UserShareItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.UserShareListResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserShareListResp} returns this
 */
proto.UserShareListResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.UserShareListResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.UserShareListResp} returns this
 */
proto.UserShareListResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.UserShareListResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserShareListResp} returns this
 */
proto.UserShareListResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total = 4;
 * @return {number}
 */
proto.UserShareListResp.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserShareListResp} returns this
 */
proto.UserShareListResp.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated UserShareItem items = 5;
 * @return {!Array<!proto.UserShareItem>}
 */
proto.UserShareListResp.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.UserShareItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.UserShareItem, 5));
};


/**
 * @param {!Array<!proto.UserShareItem>} value
 * @return {!proto.UserShareListResp} returns this
*/
proto.UserShareListResp.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.UserShareItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.UserShareItem}
 */
proto.UserShareListResp.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.UserShareItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.UserShareListResp} returns this
 */
proto.UserShareListResp.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.FileEditShareReq.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileEditShareReq.prototype.toObject = function(opt_includeInstance) {
  return proto.FileEditShareReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileEditShareReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileEditShareReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileidsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    useridlist: jspb.Message.getFieldWithDefault(msg, 4, ""),
    startat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    endat: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileEditShareReq}
 */
proto.FileEditShareReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileEditShareReq;
  return proto.FileEditShareReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileEditShareReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileEditShareReq}
 */
proto.FileEditShareReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFileids(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseridlist(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileEditShareReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileEditShareReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileEditShareReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileEditShareReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getUseridlist();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStartat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getEndat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileEditShareReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileEditShareReq} returns this
 */
proto.FileEditShareReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.FileEditShareReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileEditShareReq} returns this
 */
proto.FileEditShareReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string fileIds = 3;
 * @return {!Array<string>}
 */
proto.FileEditShareReq.prototype.getFileidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.FileEditShareReq} returns this
 */
proto.FileEditShareReq.prototype.setFileidsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.FileEditShareReq} returns this
 */
proto.FileEditShareReq.prototype.addFileids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.FileEditShareReq} returns this
 */
proto.FileEditShareReq.prototype.clearFileidsList = function() {
  return this.setFileidsList([]);
};


/**
 * optional string userIdList = 4;
 * @return {string}
 */
proto.FileEditShareReq.prototype.getUseridlist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileEditShareReq} returns this
 */
proto.FileEditShareReq.prototype.setUseridlist = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 startAt = 5;
 * @return {number}
 */
proto.FileEditShareReq.prototype.getStartat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileEditShareReq} returns this
 */
proto.FileEditShareReq.prototype.setStartat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 endAt = 6;
 * @return {number}
 */
proto.FileEditShareReq.prototype.getEndat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileEditShareReq} returns this
 */
proto.FileEditShareReq.prototype.setEndat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AddressbookBackupReq.prototype.toObject = function(opt_includeInstance) {
  return proto.AddressbookBackupReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AddressbookBackupReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddressbookBackupReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    devicename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AddressbookBackupReq}
 */
proto.AddressbookBackupReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AddressbookBackupReq;
  return proto.AddressbookBackupReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AddressbookBackupReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AddressbookBackupReq}
 */
proto.AddressbookBackupReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicename(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AddressbookBackupReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AddressbookBackupReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AddressbookBackupReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddressbookBackupReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDevicename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.AddressbookBackupReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.AddressbookBackupReq} returns this
 */
proto.AddressbookBackupReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.AddressbookBackupReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AddressbookBackupReq} returns this
 */
proto.AddressbookBackupReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string deviceName = 3;
 * @return {string}
 */
proto.AddressbookBackupReq.prototype.getDevicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AddressbookBackupReq} returns this
 */
proto.AddressbookBackupReq.prototype.setDevicename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.AddressbookBackupReq.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.AddressbookBackupReq} returns this
 */
proto.AddressbookBackupReq.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AddressbookDeleteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.AddressbookDeleteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AddressbookDeleteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddressbookDeleteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AddressbookDeleteReq}
 */
proto.AddressbookDeleteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AddressbookDeleteReq;
  return proto.AddressbookDeleteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AddressbookDeleteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AddressbookDeleteReq}
 */
proto.AddressbookDeleteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AddressbookDeleteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AddressbookDeleteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AddressbookDeleteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddressbookDeleteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.AddressbookDeleteReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.AddressbookDeleteReq} returns this
 */
proto.AddressbookDeleteReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.AddressbookDeleteReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AddressbookDeleteReq} returns this
 */
proto.AddressbookDeleteReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.AddressbookDeleteReq.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.AddressbookDeleteReq} returns this
 */
proto.AddressbookDeleteReq.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AddressbookDeleteAllReq.prototype.toObject = function(opt_includeInstance) {
  return proto.AddressbookDeleteAllReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AddressbookDeleteAllReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddressbookDeleteAllReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AddressbookDeleteAllReq}
 */
proto.AddressbookDeleteAllReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AddressbookDeleteAllReq;
  return proto.AddressbookDeleteAllReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AddressbookDeleteAllReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AddressbookDeleteAllReq}
 */
proto.AddressbookDeleteAllReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AddressbookDeleteAllReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AddressbookDeleteAllReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AddressbookDeleteAllReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddressbookDeleteAllReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.AddressbookDeleteAllReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.AddressbookDeleteAllReq} returns this
 */
proto.AddressbookDeleteAllReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.AddressbookDeleteAllReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AddressbookDeleteAllReq} returns this
 */
proto.AddressbookDeleteAllReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AddressbookListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.AddressbookListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AddressbookListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddressbookListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AddressbookListReq}
 */
proto.AddressbookListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AddressbookListReq;
  return proto.AddressbookListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AddressbookListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AddressbookListReq}
 */
proto.AddressbookListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AddressbookListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AddressbookListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AddressbookListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddressbookListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.AddressbookListReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.AddressbookListReq} returns this
 */
proto.AddressbookListReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.AddressbookListReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AddressbookListReq} returns this
 */
proto.AddressbookListReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 offset = 3;
 * @return {number}
 */
proto.AddressbookListReq.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.AddressbookListReq} returns this
 */
proto.AddressbookListReq.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.AddressbookListReq.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.AddressbookListReq} returns this
 */
proto.AddressbookListReq.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Addressbook.prototype.toObject = function(opt_includeInstance) {
  return proto.Addressbook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Addressbook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Addressbook.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    backupat: jspb.Message.getFieldWithDefault(msg, 2, 0),
    devicename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Addressbook}
 */
proto.Addressbook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Addressbook;
  return proto.Addressbook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Addressbook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Addressbook}
 */
proto.Addressbook.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBackupat(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicename(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Addressbook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Addressbook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Addressbook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Addressbook.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBackupat();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getDevicename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.Addressbook.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Addressbook} returns this
 */
proto.Addressbook.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 backupAt = 2;
 * @return {number}
 */
proto.Addressbook.prototype.getBackupat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Addressbook} returns this
 */
proto.Addressbook.prototype.setBackupat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string deviceName = 3;
 * @return {string}
 */
proto.Addressbook.prototype.getDevicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Addressbook} returns this
 */
proto.Addressbook.prototype.setDevicename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.Addressbook.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Addressbook} returns this
 */
proto.Addressbook.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.AddressbookListResp.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AddressbookListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.AddressbookListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AddressbookListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddressbookListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0),
    addressbooksList: jspb.Message.toObjectList(msg.getAddressbooksList(),
    proto.Addressbook.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AddressbookListResp}
 */
proto.AddressbookListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AddressbookListResp;
  return proto.AddressbookListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AddressbookListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AddressbookListResp}
 */
proto.AddressbookListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 5:
      var value = new proto.Addressbook;
      reader.readMessage(value,proto.Addressbook.deserializeBinaryFromReader);
      msg.addAddressbooks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AddressbookListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AddressbookListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AddressbookListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AddressbookListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAddressbooksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.Addressbook.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.AddressbookListResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.AddressbookListResp} returns this
 */
proto.AddressbookListResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.AddressbookListResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.AddressbookListResp} returns this
 */
proto.AddressbookListResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.AddressbookListResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AddressbookListResp} returns this
 */
proto.AddressbookListResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total = 4;
 * @return {number}
 */
proto.AddressbookListResp.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.AddressbookListResp} returns this
 */
proto.AddressbookListResp.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated Addressbook addressbooks = 5;
 * @return {!Array<!proto.Addressbook>}
 */
proto.AddressbookListResp.prototype.getAddressbooksList = function() {
  return /** @type{!Array<!proto.Addressbook>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Addressbook, 5));
};


/**
 * @param {!Array<!proto.Addressbook>} value
 * @return {!proto.AddressbookListResp} returns this
*/
proto.AddressbookListResp.prototype.setAddressbooksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.Addressbook=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Addressbook}
 */
proto.AddressbookListResp.prototype.addAddressbooks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.Addressbook, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.AddressbookListResp} returns this
 */
proto.AddressbookListResp.prototype.clearAddressbooksList = function() {
  return this.setAddressbooksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppointAddressListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.AppointAddressListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppointAddressListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppointAddressListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppointAddressListReq}
 */
proto.AppointAddressListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppointAddressListReq;
  return proto.AppointAddressListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppointAddressListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppointAddressListReq}
 */
proto.AppointAddressListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppointAddressListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppointAddressListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppointAddressListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppointAddressListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.AppointAddressListReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.AppointAddressListReq} returns this
 */
proto.AppointAddressListReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.AppointAddressListReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppointAddressListReq} returns this
 */
proto.AppointAddressListReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.AppointAddressListReq.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.AppointAddressListReq} returns this
 */
proto.AppointAddressListReq.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.AppointAddressListResp.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppointAddressListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.AppointAddressListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppointAddressListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppointAddressListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0),
    addressbooksList: jspb.Message.toObjectList(msg.getAddressbooksList(),
    proto.Addressbook.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppointAddressListResp}
 */
proto.AppointAddressListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppointAddressListResp;
  return proto.AppointAddressListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppointAddressListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppointAddressListResp}
 */
proto.AppointAddressListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 5:
      var value = new proto.Addressbook;
      reader.readMessage(value,proto.Addressbook.deserializeBinaryFromReader);
      msg.addAddressbooks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppointAddressListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppointAddressListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppointAddressListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppointAddressListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAddressbooksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.Addressbook.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.AppointAddressListResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.AppointAddressListResp} returns this
 */
proto.AppointAddressListResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.AppointAddressListResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.AppointAddressListResp} returns this
 */
proto.AppointAddressListResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.AppointAddressListResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppointAddressListResp} returns this
 */
proto.AppointAddressListResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total = 4;
 * @return {number}
 */
proto.AppointAddressListResp.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.AppointAddressListResp} returns this
 */
proto.AppointAddressListResp.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated Addressbook addressbooks = 5;
 * @return {!Array<!proto.Addressbook>}
 */
proto.AppointAddressListResp.prototype.getAddressbooksList = function() {
  return /** @type{!Array<!proto.Addressbook>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Addressbook, 5));
};


/**
 * @param {!Array<!proto.Addressbook>} value
 * @return {!proto.AppointAddressListResp} returns this
*/
proto.AppointAddressListResp.prototype.setAddressbooksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.Addressbook=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Addressbook}
 */
proto.AppointAddressListResp.prototype.addAddressbooks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.Addressbook, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.AppointAddressListResp} returns this
 */
proto.AppointAddressListResp.prototype.clearAddressbooksList = function() {
  return this.setAddressbooksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppointFileListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.AppointFileListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppointFileListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppointFileListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parentid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isfolder: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppointFileListReq}
 */
proto.AppointFileListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppointFileListReq;
  return proto.AppointFileListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppointFileListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppointFileListReq}
 */
proto.AppointFileListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsfolder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppointFileListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppointFileListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppointFileListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppointFileListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParentid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsfolder();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.AppointFileListReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.AppointFileListReq} returns this
 */
proto.AppointFileListReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.AppointFileListReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppointFileListReq} returns this
 */
proto.AppointFileListReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string parentId = 3;
 * @return {string}
 */
proto.AppointFileListReq.prototype.getParentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppointFileListReq} returns this
 */
proto.AppointFileListReq.prototype.setParentid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 isFolder = 4;
 * @return {number}
 */
proto.AppointFileListReq.prototype.getIsfolder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.AppointFileListReq} returns this
 */
proto.AppointFileListReq.prototype.setIsfolder = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppointFileListItem.prototype.toObject = function(opt_includeInstance) {
  return proto.AppointFileListItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppointFileListItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppointFileListItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ext: jspb.Message.getFieldWithDefault(msg, 4, ""),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0),
    parentid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    isfolder: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    paths: jspb.Message.getFieldWithDefault(msg, 8, ""),
    md5: jspb.Message.getFieldWithDefault(msg, 9, ""),
    children: jspb.Message.getFieldWithDefault(msg, 10, ""),
    cid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    filepaths: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppointFileListItem}
 */
proto.AppointFileListItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppointFileListItem;
  return proto.AppointFileListItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppointFileListItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppointFileListItem}
 */
proto.AppointFileListItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentid(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsfolder(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaths(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setChildren(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilepaths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppointFileListItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppointFileListItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppointFileListItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppointFileListItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExt();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getParentid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIsfolder();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getPaths();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getChildren();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getFilepaths();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.AppointFileListItem.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppointFileListItem} returns this
 */
proto.AppointFileListItem.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.AppointFileListItem.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppointFileListItem} returns this
 */
proto.AppointFileListItem.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.AppointFileListItem.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppointFileListItem} returns this
 */
proto.AppointFileListItem.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ext = 4;
 * @return {string}
 */
proto.AppointFileListItem.prototype.getExt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppointFileListItem} returns this
 */
proto.AppointFileListItem.prototype.setExt = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 size = 5;
 * @return {number}
 */
proto.AppointFileListItem.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.AppointFileListItem} returns this
 */
proto.AppointFileListItem.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string parentId = 6;
 * @return {string}
 */
proto.AppointFileListItem.prototype.getParentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppointFileListItem} returns this
 */
proto.AppointFileListItem.prototype.setParentid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool isFolder = 7;
 * @return {boolean}
 */
proto.AppointFileListItem.prototype.getIsfolder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.AppointFileListItem} returns this
 */
proto.AppointFileListItem.prototype.setIsfolder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string paths = 8;
 * @return {string}
 */
proto.AppointFileListItem.prototype.getPaths = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppointFileListItem} returns this
 */
proto.AppointFileListItem.prototype.setPaths = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string md5 = 9;
 * @return {string}
 */
proto.AppointFileListItem.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppointFileListItem} returns this
 */
proto.AppointFileListItem.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string children = 10;
 * @return {string}
 */
proto.AppointFileListItem.prototype.getChildren = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppointFileListItem} returns this
 */
proto.AppointFileListItem.prototype.setChildren = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string cid = 11;
 * @return {string}
 */
proto.AppointFileListItem.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppointFileListItem} returns this
 */
proto.AppointFileListItem.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string filePaths = 12;
 * @return {string}
 */
proto.AppointFileListItem.prototype.getFilepaths = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppointFileListItem} returns this
 */
proto.AppointFileListItem.prototype.setFilepaths = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.AppointFileListResp.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppointFileListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.AppointFileListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppointFileListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppointFileListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.AppointFileListItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppointFileListResp}
 */
proto.AppointFileListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppointFileListResp;
  return proto.AppointFileListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppointFileListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppointFileListResp}
 */
proto.AppointFileListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 5:
      var value = new proto.AppointFileListItem;
      reader.readMessage(value,proto.AppointFileListItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppointFileListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppointFileListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppointFileListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppointFileListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.AppointFileListItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.AppointFileListResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.AppointFileListResp} returns this
 */
proto.AppointFileListResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.AppointFileListResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.AppointFileListResp} returns this
 */
proto.AppointFileListResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.AppointFileListResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppointFileListResp} returns this
 */
proto.AppointFileListResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total = 4;
 * @return {number}
 */
proto.AppointFileListResp.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.AppointFileListResp} returns this
 */
proto.AppointFileListResp.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated AppointFileListItem items = 5;
 * @return {!Array<!proto.AppointFileListItem>}
 */
proto.AppointFileListResp.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.AppointFileListItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.AppointFileListItem, 5));
};


/**
 * @param {!Array<!proto.AppointFileListItem>} value
 * @return {!proto.AppointFileListResp} returns this
*/
proto.AppointFileListResp.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.AppointFileListItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AppointFileListItem}
 */
proto.AppointFileListResp.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.AppointFileListItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.AppointFileListResp} returns this
 */
proto.AppointFileListResp.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileBackupListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.FileBackupListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileBackupListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileBackupListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    formdevice: jspb.Message.getFieldWithDefault(msg, 3, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 4, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileBackupListReq}
 */
proto.FileBackupListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileBackupListReq;
  return proto.FileBackupListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileBackupListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileBackupListReq}
 */
proto.FileBackupListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormdevice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileBackupListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileBackupListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileBackupListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileBackupListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFormdevice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileBackupListReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileBackupListReq} returns this
 */
proto.FileBackupListReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.FileBackupListReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileBackupListReq} returns this
 */
proto.FileBackupListReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string formDevice = 3;
 * @return {string}
 */
proto.FileBackupListReq.prototype.getFormdevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileBackupListReq} returns this
 */
proto.FileBackupListReq.prototype.setFormdevice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 offset = 4;
 * @return {number}
 */
proto.FileBackupListReq.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileBackupListReq} returns this
 */
proto.FileBackupListReq.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 limit = 5;
 * @return {number}
 */
proto.FileBackupListReq.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileBackupListReq} returns this
 */
proto.FileBackupListReq.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.FileBackupListResp.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileBackupListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.FileBackupListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileBackupListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileBackupListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.AppointFileListItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileBackupListResp}
 */
proto.FileBackupListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileBackupListResp;
  return proto.FileBackupListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileBackupListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileBackupListResp}
 */
proto.FileBackupListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 5:
      var value = new proto.AppointFileListItem;
      reader.readMessage(value,proto.AppointFileListItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileBackupListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileBackupListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileBackupListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileBackupListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.AppointFileListItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileBackupListResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileBackupListResp} returns this
 */
proto.FileBackupListResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.FileBackupListResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.FileBackupListResp} returns this
 */
proto.FileBackupListResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.FileBackupListResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileBackupListResp} returns this
 */
proto.FileBackupListResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total = 4;
 * @return {number}
 */
proto.FileBackupListResp.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileBackupListResp} returns this
 */
proto.FileBackupListResp.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated AppointFileListItem items = 5;
 * @return {!Array<!proto.AppointFileListItem>}
 */
proto.FileBackupListResp.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.AppointFileListItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.AppointFileListItem, 5));
};


/**
 * @param {!Array<!proto.AppointFileListItem>} value
 * @return {!proto.FileBackupListResp} returns this
*/
proto.FileBackupListResp.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.AppointFileListItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AppointFileListItem}
 */
proto.FileBackupListResp.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.AppointFileListItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.FileBackupListResp} returns this
 */
proto.FileBackupListResp.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SearchFileMd5Req.prototype.toObject = function(opt_includeInstance) {
  return proto.SearchFileMd5Req.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SearchFileMd5Req} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SearchFileMd5Req.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    md5: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SearchFileMd5Req}
 */
proto.SearchFileMd5Req.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SearchFileMd5Req;
  return proto.SearchFileMd5Req.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SearchFileMd5Req} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SearchFileMd5Req}
 */
proto.SearchFileMd5Req.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SearchFileMd5Req.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SearchFileMd5Req.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SearchFileMd5Req} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SearchFileMd5Req.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.SearchFileMd5Req.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SearchFileMd5Req} returns this
 */
proto.SearchFileMd5Req.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.SearchFileMd5Req.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SearchFileMd5Req} returns this
 */
proto.SearchFileMd5Req.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string md5 = 3;
 * @return {string}
 */
proto.SearchFileMd5Req.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.SearchFileMd5Req} returns this
 */
proto.SearchFileMd5Req.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SearchFileMd5Resp.prototype.toObject = function(opt_includeInstance) {
  return proto.SearchFileMd5Resp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SearchFileMd5Resp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SearchFileMd5Resp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, ""),
    cid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SearchFileMd5Resp}
 */
proto.SearchFileMd5Resp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SearchFileMd5Resp;
  return proto.SearchFileMd5Resp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SearchFileMd5Resp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SearchFileMd5Resp}
 */
proto.SearchFileMd5Resp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SearchFileMd5Resp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SearchFileMd5Resp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SearchFileMd5Resp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SearchFileMd5Resp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.SearchFileMd5Resp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SearchFileMd5Resp} returns this
 */
proto.SearchFileMd5Resp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.SearchFileMd5Resp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.SearchFileMd5Resp} returns this
 */
proto.SearchFileMd5Resp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.SearchFileMd5Resp.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.SearchFileMd5Resp} returns this
 */
proto.SearchFileMd5Resp.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string cid = 4;
 * @return {string}
 */
proto.SearchFileMd5Resp.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.SearchFileMd5Resp} returns this
 */
proto.SearchFileMd5Resp.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileRecordReq.prototype.toObject = function(opt_includeInstance) {
  return proto.FileRecordReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileRecordReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileRecordReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fileid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    parentid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    cid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    md5: jspb.Message.getFieldWithDefault(msg, 7, ""),
    isfolder: jspb.Message.getFieldWithDefault(msg, 8, 0),
    size: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileRecordReq}
 */
proto.FileRecordReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileRecordReq;
  return proto.FileRecordReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileRecordReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileRecordReq}
 */
proto.FileRecordReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsfolder(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileRecordReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileRecordReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileRecordReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileRecordReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParentid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIsfolder();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileRecordReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileRecordReq} returns this
 */
proto.FileRecordReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.FileRecordReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileRecordReq} returns this
 */
proto.FileRecordReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string fileId = 3;
 * @return {string}
 */
proto.FileRecordReq.prototype.getFileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileRecordReq} returns this
 */
proto.FileRecordReq.prototype.setFileid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string parentId = 4;
 * @return {string}
 */
proto.FileRecordReq.prototype.getParentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileRecordReq} returns this
 */
proto.FileRecordReq.prototype.setParentid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.FileRecordReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileRecordReq} returns this
 */
proto.FileRecordReq.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string cid = 6;
 * @return {string}
 */
proto.FileRecordReq.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileRecordReq} returns this
 */
proto.FileRecordReq.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string md5 = 7;
 * @return {string}
 */
proto.FileRecordReq.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileRecordReq} returns this
 */
proto.FileRecordReq.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 isFolder = 8;
 * @return {number}
 */
proto.FileRecordReq.prototype.getIsfolder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileRecordReq} returns this
 */
proto.FileRecordReq.prototype.setIsfolder = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 size = 9;
 * @return {number}
 */
proto.FileRecordReq.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileRecordReq} returns this
 */
proto.FileRecordReq.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BackupsListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.BackupsListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BackupsListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BackupsListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BackupsListReq}
 */
proto.BackupsListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BackupsListReq;
  return proto.BackupsListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BackupsListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BackupsListReq}
 */
proto.BackupsListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BackupsListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BackupsListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BackupsListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BackupsListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.BackupsListReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.BackupsListReq} returns this
 */
proto.BackupsListReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.BackupsListReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.BackupsListReq} returns this
 */
proto.BackupsListReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 offset = 3;
 * @return {number}
 */
proto.BackupsListReq.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.BackupsListReq} returns this
 */
proto.BackupsListReq.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.BackupsListReq.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.BackupsListReq} returns this
 */
proto.BackupsListReq.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BackupsListItem.prototype.toObject = function(opt_includeInstance) {
  return proto.BackupsListItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BackupsListItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BackupsListItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    devicename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    filecount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    createdat: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BackupsListItem}
 */
proto.BackupsListItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BackupsListItem;
  return proto.BackupsListItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BackupsListItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BackupsListItem}
 */
proto.BackupsListItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFilecount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BackupsListItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BackupsListItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BackupsListItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BackupsListItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDevicename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFilecount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.BackupsListItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.BackupsListItem} returns this
 */
proto.BackupsListItem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string deviceName = 2;
 * @return {string}
 */
proto.BackupsListItem.prototype.getDevicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.BackupsListItem} returns this
 */
proto.BackupsListItem.prototype.setDevicename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 fileCount = 3;
 * @return {number}
 */
proto.BackupsListItem.prototype.getFilecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.BackupsListItem} returns this
 */
proto.BackupsListItem.prototype.setFilecount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 createdAt = 4;
 * @return {number}
 */
proto.BackupsListItem.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.BackupsListItem} returns this
 */
proto.BackupsListItem.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.BackupsListResp.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BackupsListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.BackupsListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BackupsListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BackupsListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.BackupsListItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BackupsListResp}
 */
proto.BackupsListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BackupsListResp;
  return proto.BackupsListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BackupsListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BackupsListResp}
 */
proto.BackupsListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 5:
      var value = new proto.BackupsListItem;
      reader.readMessage(value,proto.BackupsListItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BackupsListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BackupsListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BackupsListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BackupsListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.BackupsListItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.BackupsListResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.BackupsListResp} returns this
 */
proto.BackupsListResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.BackupsListResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.BackupsListResp} returns this
 */
proto.BackupsListResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.BackupsListResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.BackupsListResp} returns this
 */
proto.BackupsListResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total = 4;
 * @return {number}
 */
proto.BackupsListResp.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.BackupsListResp} returns this
 */
proto.BackupsListResp.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated BackupsListItem items = 5;
 * @return {!Array<!proto.BackupsListItem>}
 */
proto.BackupsListResp.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.BackupsListItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.BackupsListItem, 5));
};


/**
 * @param {!Array<!proto.BackupsListItem>} value
 * @return {!proto.BackupsListResp} returns this
*/
proto.BackupsListResp.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.BackupsListItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.BackupsListItem}
 */
proto.BackupsListResp.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.BackupsListItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.BackupsListResp} returns this
 */
proto.BackupsListResp.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BackupsAddReq.prototype.toObject = function(opt_includeInstance) {
  return proto.BackupsAddReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BackupsAddReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BackupsAddReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    devicename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    filecount: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BackupsAddReq}
 */
proto.BackupsAddReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BackupsAddReq;
  return proto.BackupsAddReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BackupsAddReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BackupsAddReq}
 */
proto.BackupsAddReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicename(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFilecount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BackupsAddReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BackupsAddReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BackupsAddReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BackupsAddReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDevicename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilecount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.BackupsAddReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.BackupsAddReq} returns this
 */
proto.BackupsAddReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.BackupsAddReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.BackupsAddReq} returns this
 */
proto.BackupsAddReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string deviceName = 3;
 * @return {string}
 */
proto.BackupsAddReq.prototype.getDevicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.BackupsAddReq} returns this
 */
proto.BackupsAddReq.prototype.setDevicename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 fileCount = 4;
 * @return {number}
 */
proto.BackupsAddReq.prototype.getFilecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.BackupsAddReq} returns this
 */
proto.BackupsAddReq.prototype.setFilecount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileLogListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.FileLogListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileLogListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileLogListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    searchtime: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileLogListReq}
 */
proto.FileLogListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileLogListReq;
  return proto.FileLogListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileLogListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileLogListReq}
 */
proto.FileLogListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSearchtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileLogListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileLogListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileLogListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileLogListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSearchtime();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileLogListReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileLogListReq} returns this
 */
proto.FileLogListReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.FileLogListReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileLogListReq} returns this
 */
proto.FileLogListReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 status = 3;
 * @return {number}
 */
proto.FileLogListReq.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileLogListReq} returns this
 */
proto.FileLogListReq.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 searchTime = 4;
 * @return {number}
 */
proto.FileLogListReq.prototype.getSearchtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileLogListReq} returns this
 */
proto.FileLogListReq.prototype.setSearchtime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FileLogListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.FileLogListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FileLogListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileLogListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fileid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0),
    idlist: jspb.Message.getFieldWithDefault(msg, 7, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FileLogListResp}
 */
proto.FileLogListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FileLogListResp;
  return proto.FileLogListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FileLogListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FileLogListResp}
 */
proto.FileLogListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdlist(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FileLogListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FileLogListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FileLogListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FileLogListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getIdlist();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.FileLogListResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileLogListResp} returns this
 */
proto.FileLogListResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.FileLogListResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.FileLogListResp} returns this
 */
proto.FileLogListResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.FileLogListResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileLogListResp} returns this
 */
proto.FileLogListResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 id = 4;
 * @return {number}
 */
proto.FileLogListResp.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileLogListResp} returns this
 */
proto.FileLogListResp.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string fileId = 5;
 * @return {string}
 */
proto.FileLogListResp.prototype.getFileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileLogListResp} returns this
 */
proto.FileLogListResp.prototype.setFileid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 status = 6;
 * @return {number}
 */
proto.FileLogListResp.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileLogListResp} returns this
 */
proto.FileLogListResp.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string idList = 7;
 * @return {string}
 */
proto.FileLogListResp.prototype.getIdlist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.FileLogListResp} returns this
 */
proto.FileLogListResp.prototype.setIdlist = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 createdAt = 8;
 * @return {number}
 */
proto.FileLogListResp.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.FileLogListResp} returns this
 */
proto.FileLogListResp.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SyncListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.SyncListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SyncListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SyncListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    devicename: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SyncListReq}
 */
proto.SyncListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SyncListReq;
  return proto.SyncListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SyncListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SyncListReq}
 */
proto.SyncListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SyncListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SyncListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SyncListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SyncListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDevicename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.SyncListReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SyncListReq} returns this
 */
proto.SyncListReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.SyncListReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SyncListReq} returns this
 */
proto.SyncListReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string deviceName = 3;
 * @return {string}
 */
proto.SyncListReq.prototype.getDevicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.SyncListReq} returns this
 */
proto.SyncListReq.prototype.setDevicename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SyncListItem.prototype.toObject = function(opt_includeInstance) {
  return proto.SyncListItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SyncListItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SyncListItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    devicename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    devicepath: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fileid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0),
    createdat: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SyncListItem}
 */
proto.SyncListItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SyncListItem;
  return proto.SyncListItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SyncListItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SyncListItem}
 */
proto.SyncListItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicepath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SyncListItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SyncListItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SyncListItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SyncListItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDevicename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDevicepath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.SyncListItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SyncListItem} returns this
 */
proto.SyncListItem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string deviceName = 2;
 * @return {string}
 */
proto.SyncListItem.prototype.getDevicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SyncListItem} returns this
 */
proto.SyncListItem.prototype.setDevicename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string devicePath = 3;
 * @return {string}
 */
proto.SyncListItem.prototype.getDevicepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.SyncListItem} returns this
 */
proto.SyncListItem.prototype.setDevicepath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string fileId = 4;
 * @return {string}
 */
proto.SyncListItem.prototype.getFileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.SyncListItem} returns this
 */
proto.SyncListItem.prototype.setFileid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 status = 5;
 * @return {number}
 */
proto.SyncListItem.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.SyncListItem} returns this
 */
proto.SyncListItem.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 createdAt = 6;
 * @return {number}
 */
proto.SyncListItem.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.SyncListItem} returns this
 */
proto.SyncListItem.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SyncListResp.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SyncListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.SyncListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SyncListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SyncListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.SyncListItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SyncListResp}
 */
proto.SyncListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SyncListResp;
  return proto.SyncListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SyncListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SyncListResp}
 */
proto.SyncListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 5:
      var value = new proto.SyncListItem;
      reader.readMessage(value,proto.SyncListItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SyncListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SyncListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SyncListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SyncListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.SyncListItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.SyncListResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SyncListResp} returns this
 */
proto.SyncListResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.SyncListResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.SyncListResp} returns this
 */
proto.SyncListResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.SyncListResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.SyncListResp} returns this
 */
proto.SyncListResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total = 4;
 * @return {number}
 */
proto.SyncListResp.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.SyncListResp} returns this
 */
proto.SyncListResp.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated SyncListItem items = 5;
 * @return {!Array<!proto.SyncListItem>}
 */
proto.SyncListResp.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.SyncListItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SyncListItem, 5));
};


/**
 * @param {!Array<!proto.SyncListItem>} value
 * @return {!proto.SyncListResp} returns this
*/
proto.SyncListResp.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.SyncListItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SyncListItem}
 */
proto.SyncListResp.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.SyncListItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.SyncListResp} returns this
 */
proto.SyncListResp.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SyncAddReq.prototype.toObject = function(opt_includeInstance) {
  return proto.SyncAddReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SyncAddReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SyncAddReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    devicename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    devicepath: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fileid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SyncAddReq}
 */
proto.SyncAddReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SyncAddReq;
  return proto.SyncAddReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SyncAddReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SyncAddReq}
 */
proto.SyncAddReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicename(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicepath(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SyncAddReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SyncAddReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SyncAddReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SyncAddReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDevicename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDevicepath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.SyncAddReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SyncAddReq} returns this
 */
proto.SyncAddReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.SyncAddReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SyncAddReq} returns this
 */
proto.SyncAddReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string deviceName = 3;
 * @return {string}
 */
proto.SyncAddReq.prototype.getDevicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.SyncAddReq} returns this
 */
proto.SyncAddReq.prototype.setDevicename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string devicePath = 4;
 * @return {string}
 */
proto.SyncAddReq.prototype.getDevicepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.SyncAddReq} returns this
 */
proto.SyncAddReq.prototype.setDevicepath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string fileId = 5;
 * @return {string}
 */
proto.SyncAddReq.prototype.getFileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.SyncAddReq} returns this
 */
proto.SyncAddReq.prototype.setFileid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 status = 6;
 * @return {number}
 */
proto.SyncAddReq.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.SyncAddReq} returns this
 */
proto.SyncAddReq.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SyncEditReq.prototype.toObject = function(opt_includeInstance) {
  return proto.SyncEditReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SyncEditReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SyncEditReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    devicename: jspb.Message.getFieldWithDefault(msg, 4, ""),
    devicepath: jspb.Message.getFieldWithDefault(msg, 5, ""),
    fileid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    status: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SyncEditReq}
 */
proto.SyncEditReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SyncEditReq;
  return proto.SyncEditReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SyncEditReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SyncEditReq}
 */
proto.SyncEditReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicename(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevicepath(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SyncEditReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SyncEditReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SyncEditReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SyncEditReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getDevicename();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDevicepath();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFileid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.SyncEditReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SyncEditReq} returns this
 */
proto.SyncEditReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.SyncEditReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SyncEditReq} returns this
 */
proto.SyncEditReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.SyncEditReq.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.SyncEditReq} returns this
 */
proto.SyncEditReq.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string deviceName = 4;
 * @return {string}
 */
proto.SyncEditReq.prototype.getDevicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.SyncEditReq} returns this
 */
proto.SyncEditReq.prototype.setDevicename = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string devicePath = 5;
 * @return {string}
 */
proto.SyncEditReq.prototype.getDevicepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.SyncEditReq} returns this
 */
proto.SyncEditReq.prototype.setDevicepath = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string fileId = 6;
 * @return {string}
 */
proto.SyncEditReq.prototype.getFileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.SyncEditReq} returns this
 */
proto.SyncEditReq.prototype.setFileid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 status = 7;
 * @return {number}
 */
proto.SyncEditReq.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.SyncEditReq} returns this
 */
proto.SyncEditReq.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SyncDelReq.prototype.toObject = function(opt_includeInstance) {
  return proto.SyncDelReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SyncDelReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SyncDelReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SyncDelReq}
 */
proto.SyncDelReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SyncDelReq;
  return proto.SyncDelReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SyncDelReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SyncDelReq}
 */
proto.SyncDelReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SyncDelReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SyncDelReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SyncDelReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SyncDelReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.SyncDelReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SyncDelReq} returns this
 */
proto.SyncDelReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.SyncDelReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SyncDelReq} returns this
 */
proto.SyncDelReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.SyncDelReq.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.SyncDelReq} returns this
 */
proto.SyncDelReq.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BoxUpdateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.BoxUpdateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BoxUpdateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BoxUpdateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    md5: jspb.Message.getFieldWithDefault(msg, 2, ""),
    version: jspb.Message.getFieldWithDefault(msg, 3, ""),
    url: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BoxUpdateReq}
 */
proto.BoxUpdateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BoxUpdateReq;
  return proto.BoxUpdateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BoxUpdateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BoxUpdateReq}
 */
proto.BoxUpdateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMd5(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BoxUpdateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BoxUpdateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BoxUpdateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BoxUpdateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMd5();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.BoxUpdateReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.BoxUpdateReq} returns this
 */
proto.BoxUpdateReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string md5 = 2;
 * @return {string}
 */
proto.BoxUpdateReq.prototype.getMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.BoxUpdateReq} returns this
 */
proto.BoxUpdateReq.prototype.setMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.BoxUpdateReq.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.BoxUpdateReq} returns this
 */
proto.BoxUpdateReq.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string url = 4;
 * @return {string}
 */
proto.BoxUpdateReq.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.BoxUpdateReq} returns this
 */
proto.BoxUpdateReq.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BoxUpdateResp.prototype.toObject = function(opt_includeInstance) {
  return proto.BoxUpdateResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BoxUpdateResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BoxUpdateResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BoxUpdateResp}
 */
proto.BoxUpdateResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BoxUpdateResp;
  return proto.BoxUpdateResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BoxUpdateResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BoxUpdateResp}
 */
proto.BoxUpdateResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BoxUpdateResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BoxUpdateResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BoxUpdateResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BoxUpdateResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Code code = 1;
 * @return {!proto.Code}
 */
proto.BoxUpdateResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.BoxUpdateResp} returns this
 */
proto.BoxUpdateResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 status = 2;
 * @return {number}
 */
proto.BoxUpdateResp.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.BoxUpdateResp} returns this
 */
proto.BoxUpdateResp.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.BoxUpdateResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.BoxUpdateResp} returns this
 */
proto.BoxUpdateResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeviceInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.DeviceInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeviceInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeviceInfoReq}
 */
proto.DeviceInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeviceInfoReq;
  return proto.DeviceInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeviceInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeviceInfoReq}
 */
proto.DeviceInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeviceInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeviceInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeviceInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.DeviceInfoReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceInfoReq} returns this
 */
proto.DeviceInfoReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeviceInfoResp.prototype.toObject = function(opt_includeInstance) {
  return proto.DeviceInfoResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeviceInfoResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceInfoResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sn: jspb.Message.getFieldWithDefault(msg, 3, ""),
    framework: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeviceInfoResp}
 */
proto.DeviceInfoResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeviceInfoResp;
  return proto.DeviceInfoResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeviceInfoResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeviceInfoResp}
 */
proto.DeviceInfoResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSn(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFramework(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeviceInfoResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeviceInfoResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeviceInfoResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceInfoResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSn();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFramework();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional Code code = 1;
 * @return {!proto.Code}
 */
proto.DeviceInfoResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.DeviceInfoResp} returns this
 */
proto.DeviceInfoResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.DeviceInfoResp.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceInfoResp} returns this
 */
proto.DeviceInfoResp.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sn = 3;
 * @return {string}
 */
proto.DeviceInfoResp.prototype.getSn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceInfoResp} returns this
 */
proto.DeviceInfoResp.prototype.setSn = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string framework = 4;
 * @return {string}
 */
proto.DeviceInfoResp.prototype.getFramework = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceInfoResp} returns this
 */
proto.DeviceInfoResp.prototype.setFramework = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DiskCountReq.prototype.toObject = function(opt_includeInstance) {
  return proto.DiskCountReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DiskCountReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DiskCountReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DiskCountReq}
 */
proto.DiskCountReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DiskCountReq;
  return proto.DiskCountReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DiskCountReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DiskCountReq}
 */
proto.DiskCountReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DiskCountReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DiskCountReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DiskCountReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DiskCountReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string peerId = 1;
 * @return {string}
 */
proto.DiskCountReq.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DiskCountReq} returns this
 */
proto.DiskCountReq.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DiskCountResp.prototype.toObject = function(opt_includeInstance) {
  return proto.DiskCountResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DiskCountResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DiskCountResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    devicecount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    deviceused: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DiskCountResp}
 */
proto.DiskCountResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DiskCountResp;
  return proto.DiskCountResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DiskCountResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DiskCountResp}
 */
proto.DiskCountResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDevicecount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDeviceused(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DiskCountResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DiskCountResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DiskCountResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DiskCountResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDevicecount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getDeviceused();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional Code code = 1;
 * @return {!proto.Code}
 */
proto.DiskCountResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.DiskCountResp} returns this
 */
proto.DiskCountResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint64 deviceCount = 2;
 * @return {number}
 */
proto.DiskCountResp.prototype.getDevicecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.DiskCountResp} returns this
 */
proto.DiskCountResp.prototype.setDevicecount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 deviceUsed = 3;
 * @return {number}
 */
proto.DiskCountResp.prototype.getDeviceused = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.DiskCountResp} returns this
 */
proto.DiskCountResp.prototype.setDeviceused = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CreateWalletReq.prototype.toObject = function(opt_includeInstance) {
  return proto.CreateWalletReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CreateWalletReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreateWalletReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CreateWalletReq}
 */
proto.CreateWalletReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CreateWalletReq;
  return proto.CreateWalletReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CreateWalletReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CreateWalletReq}
 */
proto.CreateWalletReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CreateWalletReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CreateWalletReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CreateWalletReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreateWalletReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 type = 1;
 * @return {number}
 */
proto.CreateWalletReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.CreateWalletReq} returns this
 */
proto.CreateWalletReq.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.CreateWalletReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.CreateWalletReq} returns this
 */
proto.CreateWalletReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetWalletReq.prototype.toObject = function(opt_includeInstance) {
  return proto.GetWalletReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetWalletReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetWalletReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetWalletReq}
 */
proto.GetWalletReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetWalletReq;
  return proto.GetWalletReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetWalletReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetWalletReq}
 */
proto.GetWalletReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetWalletReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetWalletReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetWalletReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetWalletReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 type = 1;
 * @return {number}
 */
proto.GetWalletReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GetWalletReq} returns this
 */
proto.GetWalletReq.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.GetWalletReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetWalletReq} returns this
 */
proto.GetWalletReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WalletItem.prototype.toObject = function(opt_includeInstance) {
  return proto.WalletItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WalletItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WalletItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WalletItem}
 */
proto.WalletItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WalletItem;
  return proto.WalletItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WalletItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WalletItem}
 */
proto.WalletItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WalletItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WalletItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WalletItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WalletItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 type = 1;
 * @return {number}
 */
proto.WalletItem.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.WalletItem} returns this
 */
proto.WalletItem.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.WalletItem.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.WalletItem} returns this
 */
proto.WalletItem.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetWalletResp.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetWalletResp.prototype.toObject = function(opt_includeInstance) {
  return proto.GetWalletResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetWalletResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetWalletResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.WalletItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetWalletResp}
 */
proto.GetWalletResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetWalletResp;
  return proto.GetWalletResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetWalletResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetWalletResp}
 */
proto.GetWalletResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.WalletItem;
      reader.readMessage(value,proto.WalletItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetWalletResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetWalletResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetWalletResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetWalletResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.WalletItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional Code code = 1;
 * @return {!proto.Code}
 */
proto.GetWalletResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.GetWalletResp} returns this
 */
proto.GetWalletResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated WalletItem items = 2;
 * @return {!Array<!proto.WalletItem>}
 */
proto.GetWalletResp.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.WalletItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.WalletItem, 2));
};


/**
 * @param {!Array<!proto.WalletItem>} value
 * @return {!proto.GetWalletResp} returns this
*/
proto.GetWalletResp.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.WalletItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.WalletItem}
 */
proto.GetWalletResp.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.WalletItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetWalletResp} returns this
 */
proto.GetWalletResp.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetWalletKeyReq.prototype.toObject = function(opt_includeInstance) {
  return proto.GetWalletKeyReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetWalletKeyReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetWalletKeyReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetWalletKeyReq}
 */
proto.GetWalletKeyReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetWalletKeyReq;
  return proto.GetWalletKeyReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetWalletKeyReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetWalletKeyReq}
 */
proto.GetWalletKeyReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetWalletKeyReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetWalletKeyReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetWalletKeyReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetWalletKeyReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.GetWalletKeyReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetWalletKeyReq} returns this
 */
proto.GetWalletKeyReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.GetWalletKeyReq.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetWalletKeyReq} returns this
 */
proto.GetWalletKeyReq.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetWalletKeyResp.prototype.toObject = function(opt_includeInstance) {
  return proto.GetWalletKeyResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetWalletKeyResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetWalletKeyResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    addresskey: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetWalletKeyResp}
 */
proto.GetWalletKeyResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetWalletKeyResp;
  return proto.GetWalletKeyResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetWalletKeyResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetWalletKeyResp}
 */
proto.GetWalletKeyResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddresskey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetWalletKeyResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetWalletKeyResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetWalletKeyResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetWalletKeyResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAddresskey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Code code = 1;
 * @return {!proto.Code}
 */
proto.GetWalletKeyResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.GetWalletKeyResp} returns this
 */
proto.GetWalletKeyResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string addressKey = 2;
 * @return {string}
 */
proto.GetWalletKeyResp.prototype.getAddresskey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetWalletKeyResp} returns this
 */
proto.GetWalletKeyResp.prototype.setAddresskey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EnableFilReq.prototype.toObject = function(opt_includeInstance) {
  return proto.EnableFilReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EnableFilReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EnableFilReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    enable: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    relayhost: jspb.Message.getFieldWithDefault(msg, 4, ""),
    minerid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    price: jspb.Message.getFieldWithDefault(msg, 6, ""),
    sizesum: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EnableFilReq}
 */
proto.EnableFilReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EnableFilReq;
  return proto.EnableFilReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EnableFilReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EnableFilReq}
 */
proto.EnableFilReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelayhost(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinerid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSizesum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EnableFilReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EnableFilReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EnableFilReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EnableFilReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRelayhost();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMinerid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSizesum();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.EnableFilReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.EnableFilReq} returns this
 */
proto.EnableFilReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.EnableFilReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.EnableFilReq} returns this
 */
proto.EnableFilReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool enable = 3;
 * @return {boolean}
 */
proto.EnableFilReq.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.EnableFilReq} returns this
 */
proto.EnableFilReq.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string relayHost = 4;
 * @return {string}
 */
proto.EnableFilReq.prototype.getRelayhost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.EnableFilReq} returns this
 */
proto.EnableFilReq.prototype.setRelayhost = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string minerId = 5;
 * @return {string}
 */
proto.EnableFilReq.prototype.getMinerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.EnableFilReq} returns this
 */
proto.EnableFilReq.prototype.setMinerid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string price = 6;
 * @return {string}
 */
proto.EnableFilReq.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.EnableFilReq} returns this
 */
proto.EnableFilReq.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 sizeSum = 7;
 * @return {number}
 */
proto.EnableFilReq.prototype.getSizesum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.EnableFilReq} returns this
 */
proto.EnableFilReq.prototype.setSizesum = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UploadFileToFilcoinReq.prototype.toObject = function(opt_includeInstance) {
  return proto.UploadFileToFilcoinReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UploadFileToFilcoinReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UploadFileToFilcoinReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ipfscid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    data: msg.getData_asB64(),
    filesize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    bytesFrom: jspb.Message.getFieldWithDefault(msg, 4, 0),
    peerid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UploadFileToFilcoinReq}
 */
proto.UploadFileToFilcoinReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UploadFileToFilcoinReq;
  return proto.UploadFileToFilcoinReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UploadFileToFilcoinReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UploadFileToFilcoinReq}
 */
proto.UploadFileToFilcoinReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpfscid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFilesize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBytesFrom(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UploadFileToFilcoinReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UploadFileToFilcoinReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UploadFileToFilcoinReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UploadFileToFilcoinReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIpfscid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getFilesize();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getBytesFrom();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string ipfsCid = 1;
 * @return {string}
 */
proto.UploadFileToFilcoinReq.prototype.getIpfscid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.UploadFileToFilcoinReq} returns this
 */
proto.UploadFileToFilcoinReq.prototype.setIpfscid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.UploadFileToFilcoinReq.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.UploadFileToFilcoinReq.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.UploadFileToFilcoinReq.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.UploadFileToFilcoinReq} returns this
 */
proto.UploadFileToFilcoinReq.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 fileSize = 3;
 * @return {number}
 */
proto.UploadFileToFilcoinReq.prototype.getFilesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.UploadFileToFilcoinReq} returns this
 */
proto.UploadFileToFilcoinReq.prototype.setFilesize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 bytes_from = 4;
 * @return {number}
 */
proto.UploadFileToFilcoinReq.prototype.getBytesFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.UploadFileToFilcoinReq} returns this
 */
proto.UploadFileToFilcoinReq.prototype.setBytesFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string peerId = 5;
 * @return {string}
 */
proto.UploadFileToFilcoinReq.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.UploadFileToFilcoinReq} returns this
 */
proto.UploadFileToFilcoinReq.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetBackUpStatusReq.prototype.toObject = function(opt_includeInstance) {
  return proto.GetBackUpStatusReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetBackUpStatusReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetBackUpStatusReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ipfscid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetBackUpStatusReq}
 */
proto.GetBackUpStatusReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetBackUpStatusReq;
  return proto.GetBackUpStatusReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetBackUpStatusReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetBackUpStatusReq}
 */
proto.GetBackUpStatusReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpfscid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetBackUpStatusReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetBackUpStatusReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetBackUpStatusReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetBackUpStatusReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIpfscid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string ipfsCid = 1;
 * @return {string}
 */
proto.GetBackUpStatusReq.prototype.getIpfscid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetBackUpStatusReq} returns this
 */
proto.GetBackUpStatusReq.prototype.setIpfscid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetBackUpStatusResp.prototype.toObject = function(opt_includeInstance) {
  return proto.GetBackUpStatusResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetBackUpStatusResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetBackUpStatusResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dealcid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    piececid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, ""),
    verified: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    duration: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetBackUpStatusResp}
 */
proto.GetBackUpStatusResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetBackUpStatusResp;
  return proto.GetBackUpStatusResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetBackUpStatusResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetBackUpStatusResp}
 */
proto.GetBackUpStatusResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDealcid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPiececid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerified(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetBackUpStatusResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetBackUpStatusResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetBackUpStatusResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetBackUpStatusResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDealcid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPiececid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVerified();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional Code code = 1;
 * @return {!proto.Code}
 */
proto.GetBackUpStatusResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.GetBackUpStatusResp} returns this
 */
proto.GetBackUpStatusResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string dealCid = 2;
 * @return {string}
 */
proto.GetBackUpStatusResp.prototype.getDealcid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetBackUpStatusResp} returns this
 */
proto.GetBackUpStatusResp.prototype.setDealcid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string pieceCid = 3;
 * @return {string}
 */
proto.GetBackUpStatusResp.prototype.getPiececid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetBackUpStatusResp} returns this
 */
proto.GetBackUpStatusResp.prototype.setPiececid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string status = 4;
 * @return {string}
 */
proto.GetBackUpStatusResp.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetBackUpStatusResp} returns this
 */
proto.GetBackUpStatusResp.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool Verified = 5;
 * @return {boolean}
 */
proto.GetBackUpStatusResp.prototype.getVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.GetBackUpStatusResp} returns this
 */
proto.GetBackUpStatusResp.prototype.setVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional uint64 Duration = 6;
 * @return {number}
 */
proto.GetBackUpStatusResp.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.GetBackUpStatusResp} returns this
 */
proto.GetBackUpStatusResp.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetMinerReq.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMinerReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMinerReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMinerReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetMinerReq}
 */
proto.GetMinerReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMinerReq;
  return proto.GetMinerReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMinerReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMinerReq}
 */
proto.GetMinerReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetMinerReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetMinerReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetMinerReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMinerReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string peerId = 1;
 * @return {string}
 */
proto.GetMinerReq.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetMinerReq} returns this
 */
proto.GetMinerReq.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetMinerResp.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetMinerResp.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMinerResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMinerResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMinerResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    minerList: jspb.Message.toObjectList(msg.getMinerList(),
    proto.Miner.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetMinerResp}
 */
proto.GetMinerResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMinerResp;
  return proto.GetMinerResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMinerResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMinerResp}
 */
proto.GetMinerResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.Miner;
      reader.readMessage(value,proto.Miner.deserializeBinaryFromReader);
      msg.addMiner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetMinerResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetMinerResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetMinerResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMinerResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMinerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.Miner.serializeBinaryToWriter
    );
  }
};


/**
 * optional Code code = 1;
 * @return {!proto.Code}
 */
proto.GetMinerResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.GetMinerResp} returns this
 */
proto.GetMinerResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated Miner miner = 2;
 * @return {!Array<!proto.Miner>}
 */
proto.GetMinerResp.prototype.getMinerList = function() {
  return /** @type{!Array<!proto.Miner>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Miner, 2));
};


/**
 * @param {!Array<!proto.Miner>} value
 * @return {!proto.GetMinerResp} returns this
*/
proto.GetMinerResp.prototype.setMinerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Miner=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Miner}
 */
proto.GetMinerResp.prototype.addMiner = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Miner, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetMinerResp} returns this
 */
proto.GetMinerResp.prototype.clearMinerList = function() {
  return this.setMinerList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Miner.prototype.toObject = function(opt_includeInstance) {
  return proto.Miner.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Miner} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Miner.toObject = function(includeInstance, msg) {
  var f, obj = {
    minerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    storage: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: jspb.Message.getFieldWithDefault(msg, 3, ""),
    relayhost: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Miner}
 */
proto.Miner.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Miner;
  return proto.Miner.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Miner} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Miner}
 */
proto.Miner.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinerid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStorage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelayhost(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Miner.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Miner.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Miner} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Miner.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStorage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRelayhost();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string MinerId = 1;
 * @return {string}
 */
proto.Miner.prototype.getMinerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Miner} returns this
 */
proto.Miner.prototype.setMinerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Storage = 2;
 * @return {string}
 */
proto.Miner.prototype.getStorage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Miner} returns this
 */
proto.Miner.prototype.setStorage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Price = 3;
 * @return {string}
 */
proto.Miner.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Miner} returns this
 */
proto.Miner.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string RelayHost = 4;
 * @return {string}
 */
proto.Miner.prototype.getRelayhost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Miner} returns this
 */
proto.Miner.prototype.setRelayhost = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CidBackupsListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.CidBackupsListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CidBackupsListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CidBackupsListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CidBackupsListReq}
 */
proto.CidBackupsListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CidBackupsListReq;
  return proto.CidBackupsListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CidBackupsListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CidBackupsListReq}
 */
proto.CidBackupsListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CidBackupsListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CidBackupsListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CidBackupsListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CidBackupsListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.CidBackupsListReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.CidBackupsListReq} returns this
 */
proto.CidBackupsListReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.CidBackupsListReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.CidBackupsListReq} returns this
 */
proto.CidBackupsListReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 offset = 3;
 * @return {number}
 */
proto.CidBackupsListReq.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.CidBackupsListReq} returns this
 */
proto.CidBackupsListReq.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 limit = 4;
 * @return {number}
 */
proto.CidBackupsListReq.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.CidBackupsListReq} returns this
 */
proto.CidBackupsListReq.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CidBackupsListItem.prototype.toObject = function(opt_includeInstance) {
  return proto.CidBackupsListItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CidBackupsListItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CidBackupsListItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    minerid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 4, 0),
    filecount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    successfile: jspb.Message.getFieldWithDefault(msg, 6, 0),
    dealcid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    filesize: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CidBackupsListItem}
 */
proto.CidBackupsListItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CidBackupsListItem;
  return proto.CidBackupsListItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CidBackupsListItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CidBackupsListItem}
 */
proto.CidBackupsListItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinerid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFilecount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSuccessfile(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDealcid(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFilesize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CidBackupsListItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CidBackupsListItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CidBackupsListItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CidBackupsListItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMinerid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getFilecount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getSuccessfile();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getDealcid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFilesize();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.CidBackupsListItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.CidBackupsListItem} returns this
 */
proto.CidBackupsListItem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string minerId = 2;
 * @return {string}
 */
proto.CidBackupsListItem.prototype.getMinerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.CidBackupsListItem} returns this
 */
proto.CidBackupsListItem.prototype.setMinerid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string price = 3;
 * @return {string}
 */
proto.CidBackupsListItem.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.CidBackupsListItem} returns this
 */
proto.CidBackupsListItem.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 createdAt = 4;
 * @return {number}
 */
proto.CidBackupsListItem.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.CidBackupsListItem} returns this
 */
proto.CidBackupsListItem.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 fileCount = 5;
 * @return {number}
 */
proto.CidBackupsListItem.prototype.getFilecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.CidBackupsListItem} returns this
 */
proto.CidBackupsListItem.prototype.setFilecount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 successFile = 6;
 * @return {number}
 */
proto.CidBackupsListItem.prototype.getSuccessfile = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.CidBackupsListItem} returns this
 */
proto.CidBackupsListItem.prototype.setSuccessfile = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string dealCid = 7;
 * @return {string}
 */
proto.CidBackupsListItem.prototype.getDealcid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.CidBackupsListItem} returns this
 */
proto.CidBackupsListItem.prototype.setDealcid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 fileSize = 8;
 * @return {number}
 */
proto.CidBackupsListItem.prototype.getFilesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.CidBackupsListItem} returns this
 */
proto.CidBackupsListItem.prototype.setFilesize = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.CidBackupsListResp.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CidBackupsListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.CidBackupsListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CidBackupsListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CidBackupsListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.CidBackupsListItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CidBackupsListResp}
 */
proto.CidBackupsListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CidBackupsListResp;
  return proto.CidBackupsListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CidBackupsListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CidBackupsListResp}
 */
proto.CidBackupsListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 5:
      var value = new proto.CidBackupsListItem;
      reader.readMessage(value,proto.CidBackupsListItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CidBackupsListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CidBackupsListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CidBackupsListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CidBackupsListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.CidBackupsListItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.CidBackupsListResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.CidBackupsListResp} returns this
 */
proto.CidBackupsListResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.CidBackupsListResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.CidBackupsListResp} returns this
 */
proto.CidBackupsListResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.CidBackupsListResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.CidBackupsListResp} returns this
 */
proto.CidBackupsListResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total = 4;
 * @return {number}
 */
proto.CidBackupsListResp.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.CidBackupsListResp} returns this
 */
proto.CidBackupsListResp.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated CidBackupsListItem items = 5;
 * @return {!Array<!proto.CidBackupsListItem>}
 */
proto.CidBackupsListResp.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.CidBackupsListItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.CidBackupsListItem, 5));
};


/**
 * @param {!Array<!proto.CidBackupsListItem>} value
 * @return {!proto.CidBackupsListResp} returns this
*/
proto.CidBackupsListResp.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.CidBackupsListItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.CidBackupsListItem}
 */
proto.CidBackupsListResp.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.CidBackupsListItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.CidBackupsListResp} returns this
 */
proto.CidBackupsListResp.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BackupCountReq.prototype.toObject = function(opt_includeInstance) {
  return proto.BackupCountReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BackupCountReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BackupCountReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BackupCountReq}
 */
proto.BackupCountReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BackupCountReq;
  return proto.BackupCountReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BackupCountReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BackupCountReq}
 */
proto.BackupCountReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BackupCountReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BackupCountReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BackupCountReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BackupCountReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.BackupCountReq.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.BackupCountReq} returns this
 */
proto.BackupCountReq.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.BackupCountReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.BackupCountReq} returns this
 */
proto.BackupCountReq.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BackupCountResp.prototype.toObject = function(opt_includeInstance) {
  return proto.BackupCountResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BackupCountResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BackupCountResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BackupCountResp}
 */
proto.BackupCountResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BackupCountResp;
  return proto.BackupCountResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BackupCountResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BackupCountResp}
 */
proto.BackupCountResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {!proto.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BackupCountResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BackupCountResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BackupCountResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BackupCountResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.BackupCountResp.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.BackupCountResp} returns this
 */
proto.BackupCountResp.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Code code = 2;
 * @return {!proto.Code}
 */
proto.BackupCountResp.prototype.getCode = function() {
  return /** @type {!proto.Code} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.Code} value
 * @return {!proto.BackupCountResp} returns this
 */
proto.BackupCountResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.BackupCountResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.BackupCountResp} returns this
 */
proto.BackupCountResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 total = 4;
 * @return {number}
 */
proto.BackupCountResp.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.BackupCountResp} returns this
 */
proto.BackupCountResp.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.Code = {
  SUCCESS: 0,
  FAILURE: 1,
  INVALIDSIGNATURE: 2,
  TOKENERROR: 3,
  TOKENEXPIRED: 4,
  DEVICEACTIVATED: 5,
  DBERROR: 6,
  IOERROR: 7,
  USERPASSERROR: 8,
  REQUESTPARAMERROR: 9,
  NOENOUGHSPACE: 10,
  NETWORKERROR: 11,
  REQUESTTIMEOUT: 12,
  USERDISABLED: 13,
  USERCOUNTISOVER: 14,
  FILENAMEEXIST: 15,
  USERNAMENOTEXIST: 16,
  SYSTEMFILE: 17,
  BACKINGUP: 18,
  MD5ISEXIST: 19,
  SIZEINSUFFICIENT: 20
};

goog.object.extend(exports, proto);
