<?php

namespace DoatKolom;

use DoatKolom\Core\Api;
use DoatKolom\Core\Singleton;

class SettingsPublicApi extends Api
{
    use Singleton;

    public function config()
    {
        $this->prefix         = 'settings';
        $this->manage_options = false;
    }

    /**
     * @return mixed
     */
    public function get_galleries()
    {
        return [
            'status' => 'success',
            'data'   => Settings::instance()->gallery_items()
        ];
    }
}
