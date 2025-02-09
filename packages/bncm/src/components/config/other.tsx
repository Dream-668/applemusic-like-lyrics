import { FC } from "react";
import { GroupBox, GroupBoxDevider } from "../appkit/group-box";
import { SwitchConfigComponent, SwitchLoadableConfigComponent } from "./common";
import {
	autoOpenLyricPageAtom,
	keepBuiltinPlayerWhenConnectedAtom,
	showStatsAtom,
	showTutoialAtom,
	usePlayPositionLerpAtom,
} from "./atoms";

export const OtherConfig: FC = () => {
	return (
		<>
			<GroupBox>
				<SwitchConfigComponent
					atom={showStatsAtom}
					label="显示实时帧数统计数据"
				/>
			</GroupBox>
			<GroupBox>
				<SwitchLoadableConfigComponent
					atom={showTutoialAtom}
					label="下一次启动时显示使用教程"
					description="如果忘记怎么操作了的话就打开这个吧"
				/>
				<GroupBoxDevider />
				<SwitchLoadableConfigComponent
					atom={autoOpenLyricPageAtom}
					label="启动时自动开启歌词页面"
				/>
				<GroupBoxDevider />
				<SwitchConfigComponent
					atom={keepBuiltinPlayerWhenConnectedAtom}
					label="歌词播放器连接时保持启用内嵌歌词页面"
					description="仅供性能对照使用，插件与播放器同时启用页面的话将会导致性能大幅下降"
				/>
				<GroupBoxDevider />
				<SwitchConfigComponent
					atom={usePlayPositionLerpAtom}
					label="使用插值平滑播放进度"
					description="会略微提高播放进度的精度，理论上可以让AMLL更精确地判定歌词行进度和展示方式，对于某些歌曲歌词可能会有帮助。此选项在 macOS 上会无视设置强制启用。"
				/>
			</GroupBox>
		</>
	);
};
