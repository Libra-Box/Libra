package pb

import (
	"context"
	"github.com/libp2p/go-libp2p/core/network"
	"github.com/libp2p/go-libp2p/core/peer"
	"github.com/libp2p/go-libp2p/core/protocol"
	"github.com/libp2p/go-msgio/protoio"
	"google.golang.org/protobuf/proto"
	"reflect"
)

var (
	ProtocolPing           protocol.ID = "/box/ping/1.0.0"
	ProtocolPeerAddress    protocol.ID = "/box/peer_address/1.0.0"
	ProtocolQrcodeScan     protocol.ID = "/box/qrcode/scan/1.0.0"
	ProtocolQrcodeGetToken protocol.ID = "/box/qrcode/get_token/1.0.0"

	ProtocolDeviceState      protocol.ID = "/box/device/state/1.0.0"
	ProtocolActivate         protocol.ID = "/box/activate/1.0.0"
	ProtocolLogin            protocol.ID = "/box/login/1.0.0"
	ProtocolAddUser          protocol.ID = "/box/user/add/1.0.0"
	ProtocolUserInfo         protocol.ID = "/box/user/info/1.0.0"
	ProtocolUserList         protocol.ID = "/box/user/list/1.0.0"
	ProtocolGetUserAvatar    protocol.ID = "/box/user/avatar/get/1.0.0"
	ProtocolUpdateUserAvatar protocol.ID = "/box/user/avatar/update/1.0.0"
	ProtocolUpdatePass       protocol.ID = "/box/user/update_pass/1.0.0"
	ProtocolUserRename       protocol.ID = "/box/user/rename/1.0.0"
	ProtocolResetPass        protocol.ID = "/box/user/reset_pass/1.0.0"
	ProtocolUserEnable       protocol.ID = "/box/user/enable/1.0.0"
	ProtocolUserDelete       protocol.ID = "/box/user/delete/1.0.0"
	ProtocolUserChangeSpace  protocol.ID = "/box/user/change_space/1.0.0"
	ProtocolForgetPass       protocol.ID = "/box/forget_pass/1.0.0"

	ProtocolNewFolder          protocol.ID = "/box/file/new_folder/1.0.0"
	ProtocolUploadFile         protocol.ID = "/box/file/upload/1.0.0"
	ProtocolDownloadFile       protocol.ID = "/box/file/download/1.0.0"
	ProtocolFileList           protocol.ID = "/box/file/list/1.0.0"
	ProtocolFileRename         protocol.ID = "/box/file/rename/1.0.0"
	ProtocolFileDelete         protocol.ID = "/box/file/delete/1.0.0"
	ProtocolFileMove           protocol.ID = "/box/file/move/1.0.0"
	ProtocolFileCopy           protocol.ID = "/box/file/copy/1.0.0"
	ProtocolFileStar           protocol.ID = "/box/file/star/1.0.0"
	ProtocolFileUnstar         protocol.ID = "/box/file/unstar/1.0.0"
	ProtocolRecycleList        protocol.ID = "/box/recycle/list/1.0.0"
	ProtocolRecycleDelete      protocol.ID = "/box/recycle/delete/1.0.0"
	ProtocolRecycleRestore     protocol.ID = "/box/recycle/restore/1.0.0"
	ProtocolFileShare          protocol.ID = "/box/file/share/1.0.0"
	ProtocolFileUnShare        protocol.ID = "/box/file/unshare/1.0.0"
	ProtocolFileCloseShare     protocol.ID = "/box/file/close_share/1.0.0"
	ProtocolFileShareList      protocol.ID = "/box/file/sharelist/1.0.0"
	ProtocolFileUserShareCount protocol.ID = "/box/file/usersharelist/1.0.0"
	ProtocolFileEditShare      protocol.ID = "/box/file/edit_share/1.0.0"
	ProtocolAppointFileList    protocol.ID = "/box/file/appointlist/1.0.0"
	ProtocolSearchFileMd5      protocol.ID = "/box/file/searchmd5/1.0.0"
	ProtocolFileRecord         protocol.ID = "/box/file/file_record/1.0.0"
	ProtocolFileBackupList     protocol.ID = "/box/file/backup_list/1.0.0"

	ProtocolAddressBookBackup    protocol.ID = "/box/addressbook/backup/1.0.0"
	ProtocolAddressBookDelete    protocol.ID = "/box/addressbook/delete/1.0.0"
	ProtocolAddressBookDeleteAll protocol.ID = "/box/addressbook/delete_all/1.0.0"
	ProtocolAddressBookList      protocol.ID = "/box/addressbook/list/1.0.0"
	ProtocolAppointAddressList   protocol.ID = "/box/appoint_address/list/1.0.0"

	ProtocolBackupsList protocol.ID = "/box/backups/list/1.0.0"
	ProtocolBackupsAdd  protocol.ID = "/box/backups/add/1.0.0"
	ProtocolFileLogList protocol.ID = "/box/log/list/1.0.0"
	ProtocolSyncList    protocol.ID = "/box/sync/list/1.0.0"
	ProtocolSyncAdd     protocol.ID = "/box/sync/add/1.0.0"
	ProtocolSyncEdit    protocol.ID = "/box/sync/edit/1.0.0"
	ProtocolSyncDel     protocol.ID = "/box/sync/del/1.0.0"
	ProtocolRelay       protocol.ID = "/box/relay/1.0.0"

	ProtocolBoxUpdate  protocol.ID = "/box/update/1.0.0"
	ProtocolDeviceInfo protocol.ID = "/box/deviceInfo/1.0.0"
	ProtocolDiskCount  protocol.ID = "/box/diskCount/1.0.0"

	ProtocolWalletAdd      protocol.ID = "/box/createWallet/1.0.0"
	ProtocolWalletAddress  protocol.ID = "/box/getWallet/1.0.0"
	ProtocolWalletKey      protocol.ID = "/box/getWalletKey/1.0.0"
	ProtocolSyncFil        protocol.ID = "/box/sync_fil/1.0.0"
	ProtocolCidBackupsList protocol.ID = "/box/cidbackups/list/1.0.0"
	ProtocolBackupsCount   protocol.ID = "/box/backupcount/list/1.0.0"

	ProtocolRequestType = map[protocol.ID]reflect.Type{
		ProtocolPing:           reflect.TypeOf(PingReq{}),
		ProtocolPeerAddress:    reflect.TypeOf(PeerAddressReq{}),
		ProtocolQrcodeScan:     reflect.TypeOf(ScanQrcodeReq{}),
		ProtocolQrcodeGetToken: reflect.TypeOf(GetTokenByQrcodeReq{}),

		ProtocolDeviceState:      reflect.TypeOf(DeviceStateReq{}),
		ProtocolActivate:         reflect.TypeOf(ActivateReq{}),
		ProtocolLogin:            reflect.TypeOf(LoginReq{}),
		ProtocolAddUser:          reflect.TypeOf(AddUserReq{}),
		ProtocolUserInfo:         reflect.TypeOf(UserInfoReq{}),
		ProtocolUserList:         reflect.TypeOf(UserListReq{}),
		ProtocolGetUserAvatar:    reflect.TypeOf(GetUserAvatarReq{}),
		ProtocolUpdateUserAvatar: reflect.TypeOf(UpdateUserAvatarReq{}),
		ProtocolUpdatePass:       reflect.TypeOf(UpdatePasswordReq{}),
		ProtocolUserRename:       reflect.TypeOf(UserRenameReq{}),
		ProtocolResetPass:        reflect.TypeOf(ResetPasswordReq{}),
		ProtocolUserEnable:       reflect.TypeOf(EnableUserReq{}),
		ProtocolUserDelete:       reflect.TypeOf(DeleteUserReq{}),
		ProtocolUserChangeSpace:  reflect.TypeOf(ChangeSpaceReq{}),
		ProtocolForgetPass:       reflect.TypeOf(ForgetPassReq{}),

		ProtocolNewFolder:          reflect.TypeOf(NewFolderReq{}),
		ProtocolUploadFile:         reflect.TypeOf(UploadFileReq{}),
		ProtocolDownloadFile:       reflect.TypeOf(DownloadFileReq{}),
		ProtocolFileList:           reflect.TypeOf(FileListReq{}),
		ProtocolFileRename:         reflect.TypeOf(FileRenameReq{}),
		ProtocolFileDelete:         reflect.TypeOf(FileDeleteReq{}),
		ProtocolFileMove:           reflect.TypeOf(FileMoveReq{}),
		ProtocolFileCopy:           reflect.TypeOf(FileCopyReq{}),
		ProtocolFileStar:           reflect.TypeOf(FileStarReq{}),
		ProtocolFileUnstar:         reflect.TypeOf(FileUnstarReq{}),
		ProtocolRecycleList:        reflect.TypeOf(RecycleListReq{}),
		ProtocolRecycleDelete:      reflect.TypeOf(RecycleDeleteReq{}),
		ProtocolRecycleRestore:     reflect.TypeOf(RecycleRestoreReq{}),
		ProtocolFileShare:          reflect.TypeOf(FileShareReq{}),
		ProtocolFileUnShare:        reflect.TypeOf(FileUnShareReq{}),
		ProtocolFileCloseShare:     reflect.TypeOf(FileCloseShareReq{}),
		ProtocolFileShareList:      reflect.TypeOf(ShareListReq{}),
		ProtocolFileUserShareCount: reflect.TypeOf(UserShareListReq{}),
		ProtocolFileEditShare:      reflect.TypeOf(FileEditShareReq{}),
		ProtocolAppointFileList:    reflect.TypeOf(AppointFileListReq{}),
		ProtocolSearchFileMd5:      reflect.TypeOf(SearchFileMd5Req{}),
		ProtocolFileRecord:         reflect.TypeOf(FileRecordReq{}),
		ProtocolFileBackupList:     reflect.TypeOf(FileBackupListReq{}),

		ProtocolAddressBookBackup:    reflect.TypeOf(AddressbookBackupReq{}),
		ProtocolAddressBookDelete:    reflect.TypeOf(AddressbookDeleteReq{}),
		ProtocolAddressBookDeleteAll: reflect.TypeOf(AddressbookDeleteAllReq{}),
		ProtocolAddressBookList:      reflect.TypeOf(AddressbookListReq{}),
		ProtocolAppointAddressList:   reflect.TypeOf(AppointAddressListReq{}),

		ProtocolBackupsList: reflect.TypeOf(BackupsListReq{}),
		ProtocolBackupsAdd:  reflect.TypeOf(BackupsAddReq{}),
		ProtocolFileLogList: reflect.TypeOf(FileLogListReq{}),
		ProtocolSyncList:    reflect.TypeOf(SyncListReq{}),
		ProtocolSyncAdd:     reflect.TypeOf(SyncAddReq{}),
		ProtocolSyncEdit:    reflect.TypeOf(SyncEditReq{}),
		ProtocolSyncDel:     reflect.TypeOf(SyncDelReq{}),
		ProtocolRelay:       reflect.TypeOf(RelayReq{}),

		ProtocolBoxUpdate:      reflect.TypeOf(BoxUpdateReq{}),
		ProtocolDeviceInfo:     reflect.TypeOf(DeviceInfoReq{}),
		ProtocolDiskCount:      reflect.TypeOf(DiskCountReq{}),
		ProtocolWalletAdd:      reflect.TypeOf(CreateWalletReq{}),
		ProtocolWalletAddress:  reflect.TypeOf(GetWalletReq{}),
		ProtocolWalletKey:      reflect.TypeOf(GetWalletKeyReq{}),
		ProtocolSyncFil:        reflect.TypeOf(EnableFilReq{}),
		ProtocolCidBackupsList: reflect.TypeOf(CidBackupsListReq{}),
		ProtocolBackupsCount:   reflect.TypeOf(BackupCountReq{}),
	}

	ProtocolResponseType = map[protocol.ID]reflect.Type{
		ProtocolPing:           reflect.TypeOf(PingResp{}),
		ProtocolPeerAddress:    reflect.TypeOf(PeerAddressResp{}),
		ProtocolQrcodeScan:     reflect.TypeOf(CommonResp{}),
		ProtocolQrcodeGetToken: reflect.TypeOf(GetTokenByQrcodeResp{}),

		ProtocolDeviceState:      reflect.TypeOf(DeviceStateResp{}),
		ProtocolActivate:         reflect.TypeOf(ActivateResp{}),
		ProtocolLogin:            reflect.TypeOf(LoginResp{}),
		ProtocolAddUser:          reflect.TypeOf(CommonResp{}),
		ProtocolUserInfo:         reflect.TypeOf(UserInfoResp{}),
		ProtocolUserList:         reflect.TypeOf(UserListResp{}),
		ProtocolGetUserAvatar:    reflect.TypeOf(GetUserAvatarResp{}),
		ProtocolUpdateUserAvatar: reflect.TypeOf(CommonResp{}),
		ProtocolUpdatePass:       reflect.TypeOf(CommonResp{}),
		ProtocolUserRename:       reflect.TypeOf(CommonResp{}),
		ProtocolResetPass:        reflect.TypeOf(CommonResp{}),
		ProtocolUserEnable:       reflect.TypeOf(CommonResp{}),
		ProtocolUserDelete:       reflect.TypeOf(CommonResp{}),
		ProtocolUserChangeSpace:  reflect.TypeOf(CommonResp{}),
		ProtocolForgetPass:       reflect.TypeOf(ForgetPassResp{}),

		ProtocolNewFolder:          reflect.TypeOf(NewFolderResp{}),
		ProtocolUploadFile:         reflect.TypeOf(CommonResp{}),
		ProtocolDownloadFile:       reflect.TypeOf(DownloadFileResp{}),
		ProtocolFileList:           reflect.TypeOf(FileListResp{}),
		ProtocolFileRename:         reflect.TypeOf(CommonResp{}),
		ProtocolFileDelete:         reflect.TypeOf(CommonResp{}),
		ProtocolFileMove:           reflect.TypeOf(CommonResp{}),
		ProtocolFileCopy:           reflect.TypeOf(CommonResp{}),
		ProtocolFileStar:           reflect.TypeOf(CommonResp{}),
		ProtocolFileUnstar:         reflect.TypeOf(CommonResp{}),
		ProtocolRecycleList:        reflect.TypeOf(RecycleListResp{}),
		ProtocolRecycleDelete:      reflect.TypeOf(CommonResp{}),
		ProtocolRecycleRestore:     reflect.TypeOf(CommonResp{}),
		ProtocolFileShare:          reflect.TypeOf(CommonResp{}),
		ProtocolFileUnShare:        reflect.TypeOf(CommonResp{}),
		ProtocolFileCloseShare:     reflect.TypeOf(CommonResp{}),
		ProtocolFileShareList:      reflect.TypeOf(ShareListResp{}),
		ProtocolFileUserShareCount: reflect.TypeOf(UserShareListResp{}),
		ProtocolFileEditShare:      reflect.TypeOf(CommonResp{}),
		ProtocolAppointFileList:    reflect.TypeOf(AppointFileListResp{}),
		ProtocolSearchFileMd5:      reflect.TypeOf(SearchFileMd5Resp{}),
		ProtocolFileRecord:         reflect.TypeOf(CommonResp{}),
		ProtocolFileBackupList:     reflect.TypeOf(FileBackupListResp{}),

		ProtocolAddressBookBackup:    reflect.TypeOf(CommonResp{}),
		ProtocolAddressBookDelete:    reflect.TypeOf(CommonResp{}),
		ProtocolAddressBookDeleteAll: reflect.TypeOf(CommonResp{}),
		ProtocolAddressBookList:      reflect.TypeOf(AddressbookListResp{}),
		ProtocolAppointAddressList:   reflect.TypeOf(AppointAddressListResp{}),
		ProtocolBackupsList:          reflect.TypeOf(BackupsListResp{}),
		ProtocolBackupsAdd:           reflect.TypeOf(CommonResp{}),
		ProtocolFileLogList:          reflect.TypeOf(FileLogListResp{}),
		ProtocolSyncAdd:              reflect.TypeOf(CommonResp{}),
		ProtocolSyncEdit:             reflect.TypeOf(CommonResp{}),
		ProtocolSyncDel:              reflect.TypeOf(CommonResp{}),
		ProtocolSyncList:             reflect.TypeOf(SyncListResp{}),
		ProtocolRelay:                reflect.TypeOf(RelayResp{}),

		ProtocolBoxUpdate:      reflect.TypeOf(BoxUpdateResp{}),
		ProtocolDeviceInfo:     reflect.TypeOf(DeviceInfoResp{}),
		ProtocolDiskCount:      reflect.TypeOf(DiskCountResp{}),
		ProtocolWalletAdd:      reflect.TypeOf(CommonResp{}),
		ProtocolWalletAddress:  reflect.TypeOf(GetWalletResp{}),
		ProtocolWalletKey:      reflect.TypeOf(GetWalletKeyResp{}),
		ProtocolSyncFil:        reflect.TypeOf(CommonResp{}),
		ProtocolCidBackupsList: reflect.TypeOf(CidBackupsListResp{}),
		ProtocolBackupsCount:   reflect.TypeOf(BackupCountResp{}),
	}
)

type MessageHandler func(ctx *Context)
type HandlersChain []MessageHandler

type Messenger interface {
	SendMessage(ctx context.Context, protocol protocol.ID, to peer.ID, msg proto.Message) error
	SendRequest(ctx context.Context, protocol protocol.ID, to peer.ID, req proto.Message) (resp interface{}, err error)
	SetMessageHandler(proto protocol.ID, h ...MessageHandler)
	GetNonce() uint32
}

type Context struct {
	context.Context
	Stream  network.Stream
	Msg     interface{}
	Writer  protoio.Writer
	aborted bool
}

func (c *Context) Abort() {
	c.aborted = true
}
