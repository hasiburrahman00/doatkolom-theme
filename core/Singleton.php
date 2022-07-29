<?php

namespace DoatKolom\Core;

trait Singleton
{
    /**
     * @var mixed
     */
    private static $instance;

    public static function instance()
    {
        if ( is_null( self::$instance ) ) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}
