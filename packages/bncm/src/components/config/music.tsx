import type { FC } from "react";
import { GroupBox, GroupBoxDevider } from "../appkit/group-box";
import { SwitchConfigComponent } from "./common";
import {
	showAudioQualityTagAtom,
	showAlbumImageAtom,
	showMusicNameAtom,
	showAlbumNameAtom,
	showMusicArtistsAtom,
	showMenuButtonAtom,
	showControlThumbAtom,
	musicControlTypeAtom,
	MusicControlType,
	leftControlButtonTypeAtom,
	rightControlButtonTypeAtom,
} from "./atoms";
import { Select } from "../appkit/select";
import { useAtom } from "jotai";
import { Alert } from "../appkit/alert";
import { PlayControlButtonType } from "../song-info/play-control-button";

const CONTROL_BUTTON_TYPE_DATA = [
	{
		label: "切换顺序播放播放",
		value: PlayControlButtonType.PlaybackOrder,
	},
	{
		label: "切换列表循环播放",
		value: PlayControlButtonType.PlaybackRepeat,
	},
	{
		label: "切换单曲循环播放",
		value: PlayControlButtonType.PlaybackOne,
	},
	{
		label: "切换随机播放",
		value: PlayControlButtonType.PlaybackRandom,
	},
	{
		label: "切换心动模式播放",
		value: PlayControlButtonType.PlaybackAI,
	},
	{
		label: "收藏歌曲",
		value: PlayControlButtonType.AddToPlaylist,
	},
	{
		label: "喜欢/取消喜欢歌曲（星型样式）",
		value: PlayControlButtonType.AddToFav,
	},
	{
		label: "喜欢/取消喜欢歌曲（心型样式）",
		value: PlayControlButtonType.AddToFavHeart,
	},
	{
		label: "切换播放模式",
		value: PlayControlButtonType.PlaybackSwitcher,
	},
	{
		label: "切换播放模式（填充样式）",
		value: PlayControlButtonType.PlaybackSwitcherFilled,
	},
];

export const LyricStyleConfig: FC = () => {
	const [musicControlType, setMusicControlType] = useAtom(musicControlTypeAtom);
	const [leftControlButtonType, setLeftControlButtonType] = useAtom(
		leftControlButtonTypeAtom,
	);
	const [rightControlButtonType, setRightControlButtonType] = useAtom(
		rightControlButtonTypeAtom,
	);
	return (
		<>
			<GroupBox>
				<SwitchConfigComponent
					atom={showAudioQualityTagAtom}
					label="显示音质标签"
				/>
				<GroupBoxDevider />
				<SwitchConfigComponent atom={showAlbumImageAtom} label="显示专辑图片" />
				<GroupBoxDevider />
				<SwitchConfigComponent atom={showMusicNameAtom} label="显示音乐名称" />
				<GroupBoxDevider />
				<SwitchConfigComponent atom={showAlbumNameAtom} label="显示专辑名称" />
				<GroupBoxDevider />
				<SwitchConfigComponent
					atom={showMusicArtistsAtom}
					label="显示歌手名称"
				/>
				<GroupBoxDevider />
				<SwitchConfigComponent
					atom={showMenuButtonAtom}
					label="显示菜单按钮"
					description="隐藏后，你依然可以通过右键左侧任意位置打开菜单"
				/>
				<GroupBoxDevider />
				<SwitchConfigComponent
					atom={showControlThumbAtom}
					label="显示控制横条"
					description="隐藏后，你依然可以通过菜单来关闭歌词页面"
				/>
			</GroupBox>
			<GroupBox>
				<div
					style={{
						display: "flex",
						gap: "8px",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div className="amll-config-text">音乐控制组件类型</div>
					<Select
						onChange={(value) => setMusicControlType(value)}
						value={musicControlType}
						data={[
							{
								label: "无",
								value: MusicControlType.None,
							},
							{
								label: "默认",
								value: MusicControlType.Default,
							},
							{
								label: "线条音频可视化",
								value: MusicControlType.BarVisualizer,
							},
						]}
					/>
				</div>
			</GroupBox>
			{musicControlType === MusicControlType.Default && (
				<>
					<Alert type="warning" title="按钮行为警告">
						按钮的部分功能可能会由于版本更新等因素失效或行为有误，但是作者就是懒得修了（）
					</Alert>
					<GroupBox>
						<div
							style={{
								display: "flex",
								gap: "8px",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<div className="amll-config-text">左侧播放控制按钮类型</div>
							<Select
								onChange={(value) => setLeftControlButtonType(value)}
								value={leftControlButtonType}
								data={CONTROL_BUTTON_TYPE_DATA}
							/>
						</div>
						<GroupBoxDevider />
						<div
							style={{
								display: "flex",
								gap: "8px",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<div className="amll-config-text">右侧播放控制按钮类型</div>
							<Select
								onChange={(value) => setRightControlButtonType(value)}
								value={rightControlButtonType}
								data={CONTROL_BUTTON_TYPE_DATA}
							/>
						</div>
					</GroupBox>
				</>
			)}
			{musicControlType === MusicControlType.BarVisualizer && (
				<Alert type="warning" title="音频可视化兼容性警告">
					音频可视化目前暂时仅支持网易云 3.0.0
					以上版本，其它不兼容平台将会隐藏或无动画，日后会提供兼容。
				</Alert>
			)}
		</>
	);
};
