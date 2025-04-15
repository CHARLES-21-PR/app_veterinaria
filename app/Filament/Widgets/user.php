<?php

namespace App\Filament\Widgets;

use App\Models\User as modelUser;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class user extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('users', $this->getUserCount())
                ->description('Total number of users')
                ->icon('heroicon-o-users')
                ->color('success')
                
            
                
        ];
        
    }
    protected function getUserCount() {

        $userCount = modelUser::get()->count();
        return $userCount;        
    }
}
